import React from 'react'
import { useTranslation } from 'react-i18next';
import productsFromFile from "../../data/products.json";
import { useParams } from 'react-router-dom';

function SingleProduct() {
  const { t } = useTranslation();

  const {productIndex} = useParams();
  const found = productsFromFile[productIndex];

  if (found === undefined) {
    // kui on tingimused täidetud, siis siin kohal HTMLi väljakuvamine lõppeb
     return <div>
      <img src="https://hiiumaa.ecoop.ee/assets/img/icon-sad-empty-cart.svg" alt="" />
      </div>
    }
  
  return (
    <div>
      <div>URL index: {productIndex} </div>
      <div>Selected product: {found.name} </div>
      <div>Price: {found.price} </div>
      <div>{t("Product image")}: </div> 
      {/* <img className='product-image' src={product.image}/>     */}
      <div>Product active: {found.active} </div>
      <div>System adder: {} </div>

    <div>SingleProduct</div>
    </div>
  )
}

export default SingleProduct