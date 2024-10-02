import React from 'react'
import { useState } from 'react'
import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(cartFromFile.slice());

  const addNewProduct = (newProduct) => {
    cartFromFile.push(newProduct);
    setCart(cartFromFile.slice());
    toast.success("Product added to cart!")
  }

  const deleteProduct = (index) => {
    cartFromFile.splice(index, 1);
    setCart(cartFromFile.slice());
    toast.success("Product deleted from cart!")
  }

  const empty = () => {
    cartFromFile.splice(0);
    setCart(cartFromFile.slice());
    toast.success("All products deleted from cart!")
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
            <th>{t("Index")}</th>
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
          {cart.map((product, index) =>
            <tr key={index}>
              <td>{index}. </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td> <img className='product-image' src={product.image} alt="" /></td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
              <td>
                <button className='edit-button' onClick={() => addNewProduct(product)}>{t("Duplicate")}</button>
                <button className='delete-button' onClick={() => deleteProduct(index)}>x</button>
              </td>
            </tr>)}
        </tbody>
      </table>
      <div>

      </div>

      <div>{cart.length} {t("pcs")}</div>

      {cart.length === 0 &&
        <div>
          <div>{t("No items in cart")}</div>
          <Link to="/">{t("Go to Homepage")}</Link>
        </div>
      }

      <div> {t("Total")}: {CalculatePrices()} €</div> <br />
      {cart.length > 0 && <button className='delete-button' onClick={empty}>{t("Delete all items from cart")}</button>}



    </div>
  )
}

export default Cart