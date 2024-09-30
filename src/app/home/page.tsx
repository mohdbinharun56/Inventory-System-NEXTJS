'use client'
import { useEffect, useState } from "react";
import Product from "../product/page";
import './home.css';

const Home = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    return (
        <div>
            <h1 style={{fontWeight: "bold", textAlign: "center", margin: "15px 0px"}}>Inventory System</h1>
            <h3 style={{fontWeight: "bold", margin: "15px 10px 0px 15px"}}>Products: {products.length}</h3>
            <div className="products-container">
                {
                    products.map(product=><Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;