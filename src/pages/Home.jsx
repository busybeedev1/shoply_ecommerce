import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import ScrollingBanner from "../components/ScrollingBanner";
import { getProducts } from "../../../servicesapi";
import "./home.css";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts();
                setProducts(data.products); // or setProducts(data) depending on your API
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <>
            <HeroSection />
            <ScrollingBanner />

            <div className="product">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;