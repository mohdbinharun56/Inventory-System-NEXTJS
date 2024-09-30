const Cart = (props) => {
    const {cart} = props;
    const {productName,price,quantity,image} = cart;
    // console.log(cart);
    return (
        <div>
            <h1>Product Name: {productName}</h1>
        </div>
    );
};

export default Cart;