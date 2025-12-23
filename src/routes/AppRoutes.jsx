import React from "react";
import { Routes, Route } from "react-router-dom";

import UserForm from "../components/UserForm/UserForm";
import HomePage from "../components/HomePage/HomePage"; 
import ProductList from "../components/products/ProductList";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<UserForm />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
    );
}