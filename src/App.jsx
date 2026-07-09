import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ScrollingBanner from "./components/ScrollingBanner";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
// import Cart from "./pages/Cart";
// import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <ScrollingBanner />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}

      </Routes>
      <ScrollingBanner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;