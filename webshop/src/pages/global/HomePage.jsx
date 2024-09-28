import React from 'react'
import { useState } from 'react'
import productsFromFile from "../../data/products.json"
import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';



function HomePage() {

    const [products, setProducts] = useState(productsFromFile);

    const AddtoCart = (newProduct) => {
        cartFromFile.push(newProduct)
        toast.success("Product added to cart!")
    }

    const sortAZ= () => {
        products.sort((a,b) => a.title.localeCompare(b.title, "en"));
        setProducts(products.slice());
      }

    const sortZA= () => {
        products.sort((a,b) => b.title.localeCompare(a.title, "en"));
        setProducts(products.slice());
    }

    const sortByLowestPrice = () => {
        products.sort((a,b) => a.price - b.price);
        setProducts(products.slice());
    }
    
    const sortByHighestPrice = () => {
        products.sort((a,b) => b.price - a.price);
        setProducts(products.slice());
    }

    const sortByRating = () => {
        products.sort((a,b) => a.rating - b.rating);
        setProducts(products.slice());
    }



  return (
    <div>

        <button onClick={sortAZ}>A-Z</button>
        <button onClick={sortZA}>Z-A</button>
        <button onClick={sortByLowestPrice}>Low to high</button>
        <button onClick={sortByHighestPrice}>High to Low</button>
        <button onClick={sortByRating}>Rating</button>

            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />
            
        {products.map(product =>
         <div key={product.id}>
            <img style={{width: "100px"}} src={product.image} alt="" />
            <div>{product.title} </div>
            <div>{product.price} </div>
            
            <button onClick={() => AddtoCart(product)}>Add to cart</button><br /><br />

         </div>)}
    </div>
  )
}

export default HomePage