import React, { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import productsFromFile from '../../data/products.json'

function EditProduct() {

  const {index} = useParams();
  const found = productsFromFile[index]; 

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
 

  const edit = () => {
    productsFromFile[index] = {
    "id": idRef.current.value,
    "title": titleRef.current.value,
    "price": priceRef.current.value,
    "description": descriptionRef.current.value,
    "category": categoryRef.current.value,
    "image": imageRef.current.value,
    "rating": ratingRef.current.value
    }
  }

  if (found === undefined) {
    return <div>Product not found!</div>
}

  return (
    <div>
      <label>Product id:</label> <br />
      <input type="text" ref={idRef} defaultValue={found.id} /> <br />
      
      <label>Product title:</label> <br />
      <input type="text" ref={titleRef} defaultValue={found.title} /> <br />

      <label>Product price:</label> <br />
      <input type="text" ref={priceRef} defaultValue={found.price} /> <br />

      <label>Product description:</label> <br />
      <input type="text" ref={descriptionRef} defaultValue={found.description} /> <br />
      
      <label>Product category:</label> <br />
      <input type="text" ref={categoryRef} defaultValue={found.category} /> <br />
      
      <label>Product image:</label> <br />
      <input type="text" ref={imageRef} defaultValue={found.image} /> <br />
      
      <label>Product rating:</label> <br />
      <input type="text" ref={ratingRef} defaultValue={found.rating} /> <br />
      
      <Link to="/maintain-products">
      <button onClick= {edit} >Edit</button> <br />
      </Link>

    </div>
  ) 
}

export default EditProduct