import React from 'react'
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';

function MaintainProducts() {
  const {products, setProducts} = useState(productsFromFile.slice());

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  const searchRef = useRef();

  const deleteProduct = (index) => {
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
}

const addProduct = () => {
  productsFromFile.push(
  {
    "id": idRef.current.value,
    "title": titleRef.current.value,
    "price": priceRef.current.value,
    "description": descriptionRef.current.value,
    "catergory": categoryRef.current.value,
    "image": imageRef.current.value,
    "rating": ratingRef.current.value
  }
);
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
      <label>Product id</label> <br />
      <input ref={idRef}  type="text" /> <br />
      <label>Product title</label> <br />
      <input ref={titleRef}  type="text" /> <br />
      <label>Product price</label> <br />
      <input ref={priceRef}  type="text" /> <br />
      <label>Product image</label> <br />
      <input ref={imageRef}  type="text" /> <br />
      <label>Product description</label> <br />
      <input ref={descriptionRef}  type="text" /> <br />
      <label>Product category</label> <br />
      <input ref={categoryRef}  type="text" /> <br />
      <label>Product rating</label> <br />
      <input ref={ratingRef}  type="text" /> <br />
      
      
      
      <button onClick={addProduct}>Add product</button> <br />

      <div> {products.length} products</div>
      {products.length > 0 && <button onClick={() => setProducts([])}>Clear</button>}
      {products.length === 0 && <div>No products here!</div>}

      {products.map((product, index) => 
        <div key={index}>
         {index}. {product.id} - {product.title} - {product.price} - {product.description}
         {product.category} - {product.image} - {product.rating}
          <button onClick={() => deleteProduct(index)}>x</button>       
          <Link to={"admin/edit-product/" + index}>
            <button>Change</button> 
          </Link>
        </div>)}
        
    </div>
  )
}

export default MaintainProducts