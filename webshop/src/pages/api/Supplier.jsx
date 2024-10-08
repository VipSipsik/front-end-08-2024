import React, { useEffect, useState } from 'react'

function Supplier() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
       fetch('https://fakestoreapi.com/products')
       .then(response => response.json())
       .then(json => setProducts(json)) 
    }, []);

    if (products.length === 0 ) {
        return <div>Loading...</div>
    }

  return (
    <div>
        {products.map(product =>
            <div>
                <img style={{"width": "50px"}} src={product.image} alt="" />
                <div>{product.id}</div>
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div>{product.description}</div>
                <div>{product.category}</div>
                <div>{product.image}</div>
                <div>{product.rating.rate}</div>
                <div>{product.rating.count}</div>
            </div>
        )}
    </div>
  )
}

export default Supplier