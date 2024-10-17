import React from 'react'
import { useState } from 'react'
// import productsFromFile from "../../data/products.json"
// import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
// import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

//import 'react-toastify/dist/ReactToastify.css';



function HomePage() {
    const { t } = useTranslation();

    const [products, setProducts] = useState([]);
    const url = "https://mirjam-webshop-example-default-rtdb.europe-west1.firebasedatabase.app/products.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json || []));
    }, []);


    const AddtoCart = (newProduct) => {
        //cartFromFile.push(newProduct);
        const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
        cartLocalStorage.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(cartLocalStorage));

        toast.success(<div>{t("Product added to cart")}</div>)
    }





    const sortAZ = () => {
        products.sort((a, b) => a.title.localeCompare(b.title, "en"));
        setProducts(products.slice());
    }

    const sortZA = () => {
        products.sort((a, b) => b.title.localeCompare(a.title, "en"));
        setProducts(products.slice());
    }

    const sortByLowestPrice = () => {
        products.sort((a, b) => a.price - b.price);
        setProducts(products.slice());
    }

    const sortByHighestPrice = () => {
        products.sort((a, b) => b.price - a.price);
        setProducts(products.slice());
    }

    const sortByLowestRating = () => {
        products.sort((a, b) => a.rating.rate - b.rating.rate);
        setProducts(products.slice());
    }

    const sortByHighestRating = () => {
        products.sort((a, b) => b.rating.rate - a.rating.rate);
        setProducts(products.slice());
    }


    if (products.length === 0) {
        return < Spinner />
    }

    return (
        <div>
            <Button onClick={sortAZ}>{t("A-Z")}</Button>
            <Button onClick={sortZA}>{t("Z-A")}</Button>
            <Button onClick={sortByLowestPrice}>{t("Low to high")}</Button>
            <Button onClick={sortByHighestPrice}>{t("High to Low")}</Button>
            <Button onClick={sortByLowestRating}>{t("Rating LtoH")}</Button>
            <Button onClick={sortByHighestRating}>{t("Rating HtoL")}</Button>

            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />

            <div className='products'>
                {products.map((product) =>
                    <div className='product' key={product.id}>
                        <img style={{ width: "100px" }} src={product.image} alt="" />
                        <div className='title'>{product.title} </div>
                        <div> {product.price} € </div>
                        <Button variant="contained" onClick={() => AddtoCart(product)}>{t("Add to cart")}</Button><br /><br />
                    </div>
                )}
            </div>
        </div>
    )
}


export default HomePage