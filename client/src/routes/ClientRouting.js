import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  SingleProduct,
  CategoriesPage,
  CartProduct,
  UserCreateAccount,
  UserLogin,
  FindUserPassword,
  UserDashboard,
  Checkout,
  OrderDetail,
  ContactUs,
} from "../pages/clients/pages";
import PageNotFound from "../pages/admin/pagenotfound/PageNotFound";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
const ClientRouting = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1> About US</h1>} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="blog" element={<h1> blog </h1>} />
        <Route path="products" element={<h1> All product listing</h1>} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="single-product/:id" element={<SingleProduct />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="category/:category" element={<CategoriesPage />} />
        <Route path="cart" element={<CartProduct />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="create-account" element={<UserCreateAccount />} />
        <Route path="forget-password" element={<FindUserPassword />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/checkout/:id" element={<OrderDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ClientRouting;
