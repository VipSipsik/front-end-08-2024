import React from 'react'
import { useState } from 'react'
import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Cart() {
    const [cart, setCart] = useState(cartFromFile.slice());

    const addNewProduct = (newProduct) => {
        cartFromFile.push(newProduct);
        setCart(cartFromFile.slice());
        toast.success("Product added to cart!")
    }

    const deleteProduct = (index) => {
        cartFromFile.splice(index,1);
        setCart(cartFromFile.slice());
        toast.success("Product deleted from cart!")
    }

    const empty = () => {
        cartFromFile.splice(0);
        setCart(cartFromFile.slice());
       }

    const CalculatePrices = () => {
        let total = 0;
        cart.forEach(product => total = total + product.price);
    
        return total;
       }

  return (
    <div>
      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
      />
      <br />
    <table className='cart'>
      <thead>
        <tr>
          <th>Index</th>
          <th>ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Image</th>
          <th>Rating rate</th>
          <th>Rating count</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product, index) =>
        <tr key={index}>
        <td>{index}. </td> 
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        <td> <img className='product-image' src={product.image} alt=""/></td>
        <td>{product.rating.rate}</td>
        <td>{product.rating.count}</td>
        <td>
        <button className='edit-button' onClick={() => addNewProduct(product)}>Duplicate</button> 
        <button className='delete-button' onClick={() => deleteProduct(index)}>x</button>
        </td>
      </tr>)}
      </tbody>
    </table> 
    <div>
      
    </div>

    <div>{cart.length} pcs</div>

    {cart.length === 0 && 
      <div>
        <div>No items in cart</div>
        <Link to="/">Go to Homepage</Link>
      </div>
    }

    <div> Total: {CalculatePrices()} €</div> <br />
    {cart.length > 0 && <button className='delete-button' onClick={empty}>Delete all items from cart</button>}

        
          
    </div>
  )
}

export default Cart