import { Routes, Route } from "react-router-dom";
// import AddProduct from "../pages/admin/addproduct/AddProduct";
// import ProductList from "../pages/admin/productlist/ProductList";
// import UpdateProduct from "../pages/admin/updateproduct/UpdateProduct";
// import Register from "../pages/admin/singup/Register";
// import Login from "../pages/admin/login/Login";
// import AdminUpdateProfile from "../pages/admin/adminupdateprofile/AdminUpdateProfile";
// import AdminHome from "../pages/admin/home/AdminHome";
import {
  Login,
  AdminHome,
  AddProduct,
  ProductList,
  UpdateProduct,
  Register,
  AdminUpdateProfile,
  PageNotFound,
} from "../pages/admin/adminPage";
const Routing = () => {
  return (
    <Routes>
      <Route path="admin">
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<AdminHome />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="view-products" element={<ProductList />} />
        <Route path="update-product/:id" element={<UpdateProduct />} />
        <Route path="create-account" element={<Register />} />
        <Route path="admin-profile" element={<AdminUpdateProfile />} />
        <Route path="view-order" element={<h2>View Orders</h2>} />
        <Route path="users" element={<h2>View users</h2>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
