// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import ContactUs from "../src/pages/ContactUs";
import Home from "../src/pages/Home";
import Cart from "../src/pages/Cart";
import Product from "../src/pages/Product";
import ProductList from "../src/pages/ProductList";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import ForgotPassword from "../src/pages/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/ContactUs" element={<ContactUs />} />
        <Route path="/pages/Cart" element={<Cart />} />
        <Route path="/pages/Product" element={<Product />} />
        <Route path="/pages/ProductList" element={<ProductList />} />
        <Route path="/pages/Register" element={<Register />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;