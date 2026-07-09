import { NavLink } from "react-router-dom";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}

                <div className="footer-brand">
                    <NavLink
                        to="/"
                        className="footer-logo"
                    >
                        Shoply
                    </NavLink>

                    <p>
                        Discover quality products,
                        fast delivery, and a seamless
                        shopping experience.
                    </p>

                    <div className="social-links">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>

                        <a href="#" aria-label="X">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                {/* Shop Links */}
                <div className="footer-section">
                    <h3>
                        Shop
                    </h3>

                    <NavLink to="/products">
                        All Products
                    </NavLink>

                    <NavLink to="/categories">
                        Categories
                    </NavLink>

                    <NavLink to="/deals">
                        Deals
                    </NavLink>

                    <NavLink to="/cart">
                        Cart
                    </NavLink>
                </div>

                {/* Support */}
                <div className="footer-section">
                    <h3>
                        Support
                    </h3>

                    <NavLink to="/contact">
                        Contact Us
                    </NavLink>

                    <NavLink to="/faq">
                        FAQ
                    </NavLink>

                    <NavLink to="/shipping">
                        Shipping
                    </NavLink>

                    <NavLink to="/returns">
                        Returns
                    </NavLink>

                </div>

                {/* Newsletter */}
                <div className="footer-newsletter">
                    <h3>
                        Stay Updated
                    </h3>

                    <p>
                        Subscribe for new products
                        and special offers.
                    </p>

                    <form>
                        <input
                            type="email"
                            placeholder="Your email"
                        />
                        <button>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Shoply.
                    All rights reserved.
                </p>

                <div>
                    <NavLink to="/privacy">
                        Privacy Policy
                    </NavLink>

                    <NavLink to="/terms">
                        Terms
                    </NavLink>
                </div>
            </div>

        </footer>
    );
};

export default Footer;