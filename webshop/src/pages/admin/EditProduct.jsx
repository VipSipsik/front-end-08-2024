import React, { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next';

function EditProduct() {
  const { t } = useTranslation();

  const {index} = useParams();
  const found = productsFromFile[index]; 

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();
 

  const edit = () => {
    productsFromFile[index] = {
    "id": idRef.current.value,
    "title": titleRef.current.value,
    "price": priceRef.current.value,
    "description": descriptionRef.current.value,
    "category": categoryRef.current.value,
    "image": imageRef.current.value,
    "rating-rate": ratingRateRef.current.value,
    "rating-count": ratingCountRef.current.value
    }
  }

  if (found === undefined) {
    return <div>Product not found!</div>
}

  return (
    <div>
      <label>{t("Product ID")}:</label> <br />
      <input type="text" ref={idRef} defaultValue={found.id} /> <br />
      
      <label>{t("Product title")}:</label> <br />
      <input type="text" ref={titleRef} defaultValue={found.title} /> <br />

      <label>{t("Product price")}:</label> <br />
      <input type="text" ref={priceRef} defaultValue={found.price} /> <br />

      <label>{t("Product description")}:</label> <br />
      <input type="text" ref={descriptionRef} defaultValue={found.description} /> <br />
      
      <label>{t("Product category")}:</label> <br />
      <input type="text" ref={categoryRef} defaultValue={found.category} /> <br />
      
      <label>{t("Product image")}:</label> <br />
      <input type="text" ref={imageRef} defaultValue={found.image} /> <br />
      
      <label>{t("Product rating rate")}:</label> <br />
      <input type="text" ref={ratingRateRef} defaultValue={found.rating.rate} /> <br />

      <label>{t("Product rating count")}:</label> <br />
      <input type="text" ref={ratingCountRef} defaultValue={found.rating.count} /> <br />
      
      <Link to="admin/maintain-products">
      <button onClick= {edit} >{t("Edit")}</button> <br />
      </Link>

    </div>
  ) 
}

export default EditProduct