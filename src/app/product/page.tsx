import './product.css';

const Product = ({product}:any) => {
    const {id,productName, price, quantity, image } = product;
    return (
        <>
            <div className="product-container">
                <h3>Product Name: {productName}</h3>
                <p><small>Price: {price}</small></p>
                <p><small>Quantity: {quantity}</small></p>
                <img src={image}></img>
                <button >Add To Cart</button>
            </div>
        </>
    );
};

export default Product;