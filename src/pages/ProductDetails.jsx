import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../servicesapi";
import "./productDetails.css";

import React from "react";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            const data = await getProduct(id);
            setProduct(data);
        }

        fetchProduct();
    }, [id]);

    if (!product) return <h1>Loading... Please Wait</h1>

    // Optional: Add click handlers for your new buttons
    const handleBuyNow = () => {
        console.log(`Buying product: ${product.title}`);
        // Add checkout routing or logic here
    };

    const handleAddToCart = () => {
        console.log(`Added to cart: ${product.title}`);
        // Add cart state update logic here
    };

    return (
        <div className="product-details">
            {/* Images */}
            <div className="product-images">
                {product.images?.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={product.title}
                    />
                ))}
            </div>

            {/* Main Info - Added product-info class to match your CSS */}
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>
                    ${product.price}
                </h2>

                <p>
                    {product.discountPercentage}% Off!💕
                </p>

                <p>
                    ⭐ Rating: {product.rating}
                </p>

                <p>
                    Brand: {product.brand}
                </p>

                <p>
                    {product.availabilityStatus}
                </p>

                <p>
                    Stock: {product.stock} items
                </p>

                <p>
                    Minimum Order: {product.minimumOrderQuantity}
                </p>

                {/* Added Buttons Section matching your CSS classes */}
                <div className="product-actions">
                    <button className="buy-btn" onClick={handleBuyNow}>
                        Buy Now
                    </button>
                    <button className="cart-btn" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;