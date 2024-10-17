import React from 'react'
import { useState } from 'react'
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import DeliveryDestination from '../api/DeliveryDestination';



function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);



  // useEffect(() => {
  //    fetch('https://fakestoreapi.com/products')
  //    .then(response => response.json())
  //    .then(json => setProducts(json)) 
  // }, []);

  const addNewProduct = (newProduct) => {
    cart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart.slice());
    toast.success("Product added to cart!")
  }

  const addPackageDelivery = () => {
    // muudaOstukorv(["Coca", "Fanta", "Sprite", "Red bull"])
    cart.push({ "title": "package-destination", "price": 3, "image": "image.jpg", "active": true });// VÕTMED SAMAKS mis toodetel
    // ({ "name": "package-destination", "price": 3, "image": "image.jpg", "active": true })
    localStorage.setItem("cart", JSON.stringify(cart)); // salvestuseks
    setCart(cart.slice());
  }

  const deleteProduct = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart.slice());
    toast.success("Product deleted from cart!")
  }

  const empty = () => {
    cart.splice(0);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart.slice());
    toast.success("All products deleted from cart!")
  }

  const CalculatePrices = () => {
    let total = 0;
    cart.forEach(product => total = total + product.price);
    return total.toFixed(2);
  }

  return (
    <div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />

      <br />

      {cart.map((product, index) =>
      <div className="cart-product" key={index}>
        <img className='product-image' src={product.image} alt="" />
        <div className='product-title'>{product.title}</div>
        <div className='product-price'>{product.price}</div>
        <button className='edit-button' onClick={() => addNewProduct(product)}>{t("Duplicate")}</button>
        <button className='delete-button' onClick={() => deleteProduct(index)}>x</button>
        </div> )}

        {cart.length > 0 && <div>{t("Total")}: {cart.length} {t("pcs")}</div>}


        {cart.length === 0 &&
          <div>
            <div>{t("No items in cart")}</div>
            <Link to="/">{t("Go to Homepage")}</Link>
          </div>
        }

        {cart.length > 0 && <button onClick={addPackageDelivery}>Add package delivery to the end</button>}

        {cart.length > 0 && <DeliveryDestination />} <br />

        <div> {t("Total")}: {CalculatePrices()} €</div> <br />
        {cart.length > 0 && <button className='delete-button' onClick={empty}>{t("Delete all items from cart")}</button>}



      </div>
  )
}

      export default Cart