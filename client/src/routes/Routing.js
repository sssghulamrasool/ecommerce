import { Routes, Route } from "react-router-dom";

import {
  Login,
  AdminHome,
  AddProduct,
  ProductList,
  UpdateProduct,
  Register,
  AdminUpdateProfile,
  PageNotFound,
  Orders,
  OrderUpdate,
  Customers,
} from "../pages/admin/adminPage";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="admin">
          <Route element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" index element={<AdminHome />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="view-products" element={<ProductList />} />
          <Route path="update-product/:id" element={<UpdateProduct />} />
          <Route path="create-account" element={<Register />} />
          <Route path="admin-profile" element={<AdminUpdateProfile />} />
          <Route path="view-order" element={<Orders />} />
          <Route path="order-update/:id" element={<OrderUpdate />} />
          <Route path="customer" element={<Customers />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
