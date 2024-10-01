import React from 'react'
import { useState } from 'react'
import productsFromFile from "../../data/products.json"
import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';


//import 'react-toastify/dist/ReactToastify.css';



function HomePage() {
    const { t } = useTranslation();

    const [products, setProducts] = useState(productsFromFile);

    const AddtoCart = (newProduct) => {
        cartFromFile.push(newProduct)
        toast.success (<div>{t("Product added to cart")}</div>)
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




    return (
        <div>
            <button onClick={sortAZ}>{t("A-Z")}</button>
            <button onClick={sortZA}>{t("Z-A")}</button>
            <button onClick={sortByLowestPrice}>{t("Low to high")}</button>
            <button onClick={sortByHighestPrice}>{t("High to Low")}</button>
            <button onClick={sortByLowestRating}>{t("Rating LtoH")}</button>
            <button onClick={sortByHighestRating}>{t("Rating HtoL")}</button>

            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />

            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>{t("Product image")}</th>
                        <th>{t("Product title")}</th>
                        <th>{t("Product price")}</th>
                        <th>{t("Product description")}</th>
                        <th>{t("Product category")}</th>
                        <th>{t("Product rating rate")}</th>
                        <th>{t("Product rating count")}</th>
                        <th>{t("Add")}</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>
                        <tr key={product.id}>                         
                            <td> <img style={{ width: "100px" }} src={product.image} alt="" /></td>
                            <td>{product.title} </td>
                            <td>{product.price} </td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.rating.rate}</td> 
                            <td>{product.rating.count}</td> 
                            <td>
                            <Button onClick={() => AddtoCart(product)}>{t("Add to cart")}</Button><br /><br />
                            </td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default HomePage