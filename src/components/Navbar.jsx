import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faUser,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleSearchClick = () => {
        console.log("open search");
        // later you can open modal or redirect here
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* LOGO */}
                <NavLink
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                >
                    Shoply
                </NavLink>

                {/* NAV LINKS */}
                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
                    <NavLink to="/categories" onClick={closeMenu}>Categories</NavLink>
                    <NavLink to="/deals" onClick={closeMenu}>Deals</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                </nav>

                {/* ACTIONS */}
                <div className="navbar-actions">

                    {/* CART */}
                    <NavLink to="/cart" className="icon-btn cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>0</span>
                    </NavLink>

                    {/* LOGIN */}
                    <NavLink to="/login" className="login-btn">
                        <FontAwesomeIcon icon={faUser} />
                        Login
                    </NavLink>

                </div>

                {/* MOBILE MENU */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

            </div>
        </header>
    );
};

export default Navbar;