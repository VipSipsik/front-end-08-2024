import React from 'react'
import { useState } from 'react'
import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom'

function Cart() {
    const [cart, setCart] = useState(cartFromFile.slice());

    const addNewProduct = (newProduct) => {
        cartFromFile.push(newProduct);
        setCart(cartFromFile.slice());
    }

    const deleteProduct = (index) => {
        cartFromFile.splice(index,1);
        setCart(cartFromFile.slice());
    }

    const emty = () => {
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

        {cart.length > 0 && <button onClick={emty}>Delete all items from cart</button>}

    <div>{cart.map((product, index) =>
      <div key={index}>
       {index}. {product.id} - {product.title} - {product.price} - 
       {product.description} - {product.category} - {product.image} - 
       {product.rating.rate} - {product.rating.count}
        <img className='product-image' src={product.image} alt=""/>
        <button onClick={() => addNewProduct(product)}>Add product</button> 
        <button onClick={() => deleteProduct(index)}>x</button>
      </div>)}
    </div>

    <div>{cart.length} pcs</div>

    {cart.length === 0 && 
      <div>
        <div>No items in cart</div>
        <Link to="/homepage">Go to Homepage</Link>
      </div>
    }

     <div> Total: {CalculatePrices()} €</div>
        
          
    </div>
  )
}

export default Cart