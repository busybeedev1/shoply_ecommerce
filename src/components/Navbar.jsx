import { useState, useEffect, useRef } from "react";
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

    // Reference to the entire navbar
    const navbarRef = useRef(null);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close menu when clicking anywhere outside navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    return (
        <header
            className="shoply-navbar"
            ref={navbarRef}
        >

            <div className="shoply-navbar-container">

                {/* LOGO */}
                <NavLink
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                >
                    Shoply
                </NavLink>


                {/* NAV LINKS */}
                <nav
                    className={`nav-links ${
                        menuOpen ? "active" : ""
                    }`}
                >
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        onClick={closeMenu}
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/categories"
                        onClick={closeMenu}
                    >
                        Categories
                    </NavLink>

                    <NavLink
                        to="/deals"
                        onClick={closeMenu}
                    >
                        Deals
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>
                </nav>


                {/* ACTIONS */}
                <div className="navbar-actions">

                    {/* CART */}
                    <NavLink
                        to="/cart"
                        className="icon-btn cart"
                        onClick={closeMenu}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>0</span>
                    </NavLink>


                    {/* LOGIN */}
                    <NavLink
                        to="/login"
                        className="login-btn"
                        onClick={closeMenu}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        Login
                    </NavLink>

                </div>


                {/* MOBILE MENU BUTTON */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

            </div>

        </header>
    );
};

export default Navbar;

