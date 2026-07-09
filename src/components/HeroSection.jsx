import "./heroSection.css";
import {
    Search,
    ShieldCheck,
    Truck,
    BadgeDollarSign,
    ArrowRight,
} from "lucide-react";

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-container">

                {/* LEFT */}
                <div className="hero-left">

                    <span className="hero-tag">
                        Nigeria's No. 1 Online Shop
                    </span>

                    <h1>
                        Quality Products From
                        <span> Trusted Suppliers</span>
                    </h1>

                    <p>
                        Buy smarter with verified vendors, competitive pricing,
                        fast delivery, and secure payments—all in one marketplace.
                    </p>

                    <div className="hero-search">
                        <input
                            type="text"
                            placeholder="Search products, suppliers..."
                        />

                        <button>
                            <Search size={15} />
                        </button>
                    </div>

                    <div className="hero-buttons">
                        <button className="primary-btn">
                            Start Shopping
                            <ArrowRight size={18} />
                        </button>

                        <button className="secondary-btn">
                            Become a Seller
                        </button>
                    </div>

                    <div className="hero-features">
                        <div>
                            <ShieldCheck size={20} />
                            Verified Suppliers
                        </div>

                        <div>
                            <Truck size={20} />
                            Fast Shipping
                        </div>

                        <div>
                            <BadgeDollarSign size={20} />
                            Secure Payments
                        </div>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="hero-right">

                    <div
                        id="heroCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="3000"
                    >
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img
                                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200"
                                    className="d-block w-100"
                                    alt="Smart Watch"
                                />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
                                    className="d-block w-100"
                                    alt="Smart Phone"
                                />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200"
                                    className="d-block w-100"
                                    alt="Headphones"
                                />
                            </div>

                            <div className="carousel-item">
                                <img
                                    src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200"
                                    className="d-block w-100"
                                    alt="Fashion"
                                />
                            </div>

                        </div>

                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                        </button>
                    </div>

                    <div className="floating-card">
                        <h3>25M+</h3>
                        <p>Products Available</p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroSection;