import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { useParams } from "react-router-dom";
import '../styles/product.css'; 

export const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        async function getProduct() {
            const result = await fetch(`https://fakestoreapi.com/products/${id}`);
            const fetchedProduct = await result.json();
            setProduct(fetchedProduct);
        }
        getProduct();
    }, [id]);

    if(!product.title) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className="container">
            <Navigation />
            <div className="details">
                <img className="image" src={product.image} alt={product.title} />
                <div className="info">
                    <h2 className="title">{product.title}</h2>
                    <p className="price">${product.price}</p>
                    <p className="description">{product.description}</p>
                    <p className="category">Category: {product.category}</p>
                    <div className="rating">
                        Rating: {product.rating?.rate} ({product.rating?.count} reviews)
                    </div>
                </div>
            </div>
        </div>
    );
};
