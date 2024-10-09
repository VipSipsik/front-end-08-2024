import React from 'react'
import { useRef } from 'react';
// import productsFromFile from "../../data/products.json";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';

// Võta kogu lisamise kood ära MaintainProducts sees
// Edit navigation barist maha 
function AddProduct() {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const url = "https://mirjam-webshop-example-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  
  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, []);

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  
  const addProduct = () => {
    products.push(
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
  toast.success (t("Product added"))
  fetch(url, { method: "PUT", body: JSON.stringify(products)});
   // ToDo: Do something after adding new product. currently no feedback
  }


  return (
    <div>
      <label>{t("Product ID")}</label> <br />
      <input ref={idRef}  type="text" /> <br />
      <label>{t("Product title")}</label> <br />
      <input ref={titleRef}  type="text" /> <br />
      <label>{t("Product price")}</label> <br />
      <input ref={priceRef}  type="text" /> <br />
      <label>{t("Product image")}</label> <br />
      <input ref={imageRef}  type="text" /> <br />
      <label>{t("Product description")}</label> <br />
      <input ref={descriptionRef}  type="text" /> <br />
      <label>{t("Product category")}</label> <br />
      <input ref={categoryRef}  type="text" /> <br />
      <label>{t("Product rating")}</label> <br />
      <input ref={ratingRef}  type="text" /> <br />
      
      
      <button onClick={addProduct}>{t("Add product")}</button> <br />

      <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />

    </div>
  )
}

export default AddProduct