import React from 'react'
import { useRef } from 'react';
import productsFromFile from "../../data/products.json";

// Võta kogu lisamise kood ära MaintainProducts sees
// Edit navigation barist maha 
function AddProduct() {


  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  
  const addProduct = () => {
    productsFromFile.push(
    {
      "id": idRef.current.value,
      "title": titleRef.current.value,
      "price": priceRef.current.value,
      "description": descriptionRef.current.value,
      "catergory": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating":  {"rate": ratingRef.current.value, "count": 0} 
    }
  );
   // ToDo: Do something after adding new product. currently no feedback
  }


  return (
    <div>
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
    </div>
  )
}

export default AddProduct