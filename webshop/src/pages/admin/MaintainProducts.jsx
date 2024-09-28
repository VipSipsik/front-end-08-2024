import React from 'react'
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
// Võta kogu lisamise kood ära MaintainProducts seest
// Edit/Change nupu peale vajutades "/ ette "
function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const searchRef = useRef();

  const deleteProduct = (index) => {
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
  }

  const SearchProducts = () => {
    const found = productsFromFile.filter(product => product.title.includes(searchRef.current.value));
    setProducts(found);
  }

  return (
    <div>
      <div>Search</div>
      <input ref={searchRef} onChange={SearchProducts} type="text" />
      <br /><br />
      <Link to={'/admin/add-product'}>
            <button>Add product</button> 
      </Link>

      <div> {products.length} products</div>
      {products.length === 0 && <div>No products here!</div>}

      <table className="maintain">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating rate</th>
            <th>Rating count</th>
            <th>Edit product</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
          <tr key={index}>
           <td>{product.id}</td>
           <td>{product.title}</td>
           <td>{product.price}</td>  
           <td>{product.description}</td>
           <td>{product.category}</td> 
           <td> <img className='product-image' src={product.image}  alt="" /> </td> 
           <td>{product.rating.rate}</td> 
           <td>{product.rating.count}</td> 
           <td>           
          <Link to={'/admin/edit-product/' + index}>
            <button className='edit-button'>Edit</button> 
          </Link>
          <button className='delete-button' onClick={() => deleteProduct(index)}>x</button>
          </td> 
         </tr>)}
        </tbody>
      </table>    
        
    </div>
  )
}

export default MaintainProducts