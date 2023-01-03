import "./App.css";
import AdminDashboard from "./pages/admin/admindashboard/AdminDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETFORMSESSIONSTORANGE } from "./utlis/GetLocalCart";
import ClientRouting from "./routes/ClientRouting";
import { useLocation } from "react-router-dom";
import { ADMINLOGINDATA } from "./utlis/AdminLogin";
import { CLIENTLOGINDATA } from "./utlis/ClientLogin";

function App() {
  const state = useSelector((state) => state.Reduder);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    fetch("http://localhost:9090/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "GET_ALL_PRODUCTS",
          payload: data.productdata,
        });
        dispatch({
          type: "GETFEATUREPRODUCT",
          payload: data.productdata.filter(
            (element) => element.feature === true
          ),
        });
        dispatch({
          type: "CARTLOCALPRODUCT",
          payload: GETFORMSESSIONSTORANGE(),
        });
      });
    fetch("http://localhost:9090/admin/adminLogin")
      .then((response) => response.json())
      .then((data) => {
        const idAdminFromLocal = ADMINLOGINDATA();
        if (idAdminFromLocal === null) {
          dispatch({
            type: "ADMIN",
            payload: null,
          });
        } else if (idAdminFromLocal !== null) {
          dispatch({
            type: "ADMIN",
            payload: data.adminData.find((el) => el._id === idAdminFromLocal),
          });
        }
      });
    fetch("http://localhost:9090/order/vieworder")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "ORDERS",
          payload: data.data,
        });
      });
    fetch("http://localhost:9090/user/userCreateAcc")
      .then((res) => res.json())
      .then((data) => {
        const clientid = CLIENTLOGINDATA();
        if (clientid === null) {
          dispatch({
            type: "CLIENT",
            payload: null,
          });
        } else if (clientid !== null) {
          dispatch({
            type: "CLIENT",
            payload: data.customers.find((elem) => elem._id === clientid),
          });
        }
      });

    fetch("http://localhost:9090/user/userCreateAcc")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({
          type: "CUSTOMERS",
          payload: data.customers,
        });
      });
    // fetch("http://localhost:9090/order/vieworder")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch({
    //       type: "ORDERS",
    //       payload: data.data,
    //     });

    //     // const clientid = CLIENTLOGINDATA();
    //     // if (clientid === null) {
    //     //   dispatch({
    //     //     type: "ORDERS",
    //     //     payload: [],
    //     //   });
    //     // } else if (clientid !== null) {
    //     //   dispatch({
    //     //     type: "ORDERS",
    //     //     payload: data.data.filter((elem) => elem.customer_id === clientid),
    //     //   });
    //     // }
    //   });
  }, []);

  const admin = location.pathname.substring().slice(0, 6);
  return (
    <div className="App">
      {admin === "/admin" ? (
        state.loadinAdminPanel ? (
          <AdminDashboard />
        ) : (
          <h1>Admin Panel is loading please wiat</h1>
        )
      ) : state.loadingProduct ? (
        <ClientRouting />
      ) : (
        <h1>Data is loading</h1>
      )}
    </div>
  );
}

export default App;
