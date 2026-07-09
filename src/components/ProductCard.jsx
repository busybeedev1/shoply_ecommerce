import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img
                src={product.thumbnail}
                alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>Special {product.discountPercentage}% Off</p>
            <p>{product.rating}</p>
            <p>
                Minimum Order:
                {product.minimumOrderQuantity}
            </p>
            <Link to={`/product/${product.id}`}>
                View Details
            </Link>

        </div>
    );
};

export default ProductCard;