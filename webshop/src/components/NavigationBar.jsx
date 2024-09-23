import React from 'react'
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
        <Link to=" ">
         <button className="btn">Homepage</button>
        </Link>

        <Link to="cart">
         <button className="btn">Cart</button>
        </Link>

        <Link to="contact-us" >
         <button className="btn">Contact</button>
        </Link>

        {/* <Link to="not-found" >
         <button className="btn">Not found</button>
        </Link> */}

        <Link to="shops" >
         <button className="btn">Our shops</button>
        </Link>
        
        {/* <Link to="single-product" >
         <button className="btn">Single product</button>
        </Link> */}


        <Link to="login" >
         <button className="btn">Login</button>
        </Link>
        <Link to="signup" >
         <button className="btn">Signup</button>
        </Link>

        <Link to="add-product" >
         <button className="btn">Add product</button>
        </Link>
        <Link to="admin-home" >
         <button className="btn">Admin home</button>
        </Link>
        <Link to="edit-product" >
         <button className="btn">Edit product</button>
        </Link>
        <Link to="maintain-categories" >
         <button className="btn">Maintain categories </button>
        </Link>
        <Link to="maintain-products" >
         <button className="btn">Maintain products</button>
        </Link>
        <Link to="maintain-shops" >
         <button className="btn">Maintain Shops</button>
        </Link>

    </div>
  )
}

export default NavigationBar