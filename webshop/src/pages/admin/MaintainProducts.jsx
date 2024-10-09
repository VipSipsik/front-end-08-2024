import React from 'react'
//import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

// Võta kogu lisamise kood ära MaintainProducts seest
// Edit/Change nupu peale vajutades "/ ette "
function MaintainProducts() {
  const { t } = useTranslation();
  const searchRef = useRef();

  const [products, setProducts] = useState([]); // products --> muutuvas seisundis
  const [dbProducts, setDbProducts] = useState([]); // täpne/ muutumatu andmebaasi seis
  const url = "https://mirjam-webshop-example-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []); // siin muudab ainukesena dbProductsi
      });
  }, []);



  const deleteProduct = (index) => {
    products.splice(index, 1);
    setProducts(products.slice());
    fetch(url, { method: "PUT", body: JSON.stringify(products) });
    toast.error("Product deleted")
  }


  const searchProducts = () => {
    const found = dbProducts.filter(product =>
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setProducts(found);
  }

  if (dbProducts.length === 0) {
    return <Spinner />
  }


  return (
    <div>
      <div>{t("Search")}</div>
      <input ref={searchRef} onChange={searchProducts} type="text" />
      <br /><br />
      <Link to={'/admin/add-product'}>
        <button>{t("Add product")}</button>
      </Link>

      <div> {products.length} {t("Products")}</div>
      {products.length === 0 && <div>No products here!</div>}

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />

      <table className="maintain-table">
        <thead>
          <tr>
            <th>{t("Product ID")}</th>
            <th>{t("Product title")}</th>
            <th>{t("Product price")}</th>
            <th>{t("Product description")}</th>
            <th>{t("Product category")}</th>
            <th>{t("Product image")}</th>
            <th>{t("Product rating rate")}</th>
            <th>{t("Product rating count")}</th>
            <th>{t("Edit product")}</th>
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
              <td> <img className='product-image' src={product.image} alt="" /> </td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
              <td>
                <Link to={'/admin/edit-product/' + index}>
                  <button className='edit-button'>{t("Edit")}</button>
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