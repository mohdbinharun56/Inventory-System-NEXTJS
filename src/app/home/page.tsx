'use client'
import { useEffect, useState } from "react";
import Product from "../product/page";
import './home.css';
import {setToLS, getDataLS, addTOLS} from '../../../public/utilities/localStorage'

const Home = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    useEffect(()=>{
        console.log('Product data:',products.length);
        if(products.length){
            const getCart = getDataLS('cart');
            console.log(getCart);
        }
    },[products]);
    const handleCart = (product):any =>{
        // console.log('product added',product);
        // const productId
        // setCart(product); // This is not the right way to set the in react
        // cart.push(product) // This is not the right way to set the in react

        const newCart:any = [...cart,product];
        setCart(newCart);
        addTOLS(product.id,'cart');
        // console.log(setToLS(product,'cart'));
    }

    // if(!products){
    //     return <h1>Loading.....</h1>
    // }
    return (
        <div>
            <h1 style={{fontWeight: "bold", textAlign: "center", margin: "15px 0px"}}>Inventory System</h1>
            <h3 style={{fontWeight: "bold", margin: "15px 10px 0px 15px"}}>Products: {products.length}</h3>
            <h3 style={{fontWeight: "bold", margin: "15px 10px 0px 15px"}}>Cart: {cart.length}</h3>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;