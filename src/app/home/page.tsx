'use client'
import { useEffect, useState } from "react";
import Product from "../product/page";
import './home.css';
import { getDataLS, addTOLS } from '../../../public/utilities/localStorage'
import Cart from "../cart/page";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        console.log('Product data:', products.length);
        if (products.length) {
            const getCart = getDataLS('cart');

            console.log(getCart);
            console.log('products is: ', products);

            const savedCart: any = [];
            for (const id of getCart) {
                // console.log(id);
                const product = products.find(product => product.id === id);
                if (product) {
                    savedCart.push(product);
                }
            }
            console.log('Cart value', savedCart);

            setCart(savedCart);
        }
    }, [products]);
    const handleCart = (product): any => {
        // console.log('product added',product);
        // const productId
        // setCart(product); // This is not the right way to set the in react
        // cart.push(product) // This is not the right way to set the in react

        const newCart: any = [...cart, product];
        setCart(newCart);
        addTOLS(product.id, 'cart');
        // console.log(setToLS(product,'cart'));
    }

    // if(!products){
    //     return <h1>Loading.....</h1>
    // }

    // console.log('c->',cart);
    return (
        <div>
            <h1 style={{ fontWeight: "bold", textAlign: "center", margin: "15px 0px" }}>Inventory System</h1>
            <h3 style={{ fontWeight: "bold", margin: "15px 10px 0px 15px" }}>Products: {products.length}</h3>
            <h3 style={{ fontWeight: "bold", margin: "15px 10px 0px 15px" }}>Cart: {cart.length}</h3>

            <div className="cart-container">
                <h1 className="cart-title">Cart</h1>
                {
                    cart.map((cart, idx) => <Cart key={idx} cart={cart}></Cart>)
                }
            </div>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;