import "./App.css";
import AdminDashboard from "./pages/admin/admindashboard/AdminDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETFORMSESSIONSTORANGE } from "./utlis/GetLocalCart";
import ClientRouting from "./routes/ClientRouting";
import { useLocation } from "react-router-dom";
import { ADMINLOGINDATA } from "./utlis/AdminLogin";

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
        // dispatch({
        //   type: "ADMIN",
        //   payload: ADMINLOGINDATA(),
        // });
      });

    fetch("http://localhost:9090/admin/adminLogin")
      .then((response) => response.json())
      .then((data) => {
        const idAdminFromLocal = ADMINLOGINDATA();

        console.log("idAdminFromLocal", idAdminFromLocal);
        dispatch({
          type: "ADMIN",
          payload: data.adminData.filter(
            (el) => el._id === idAdminFromLocal?.adminid
          ),
        });
      });
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
      {/* {state.loadingProduct && state.loadinAdminPanel ? (
        <>{admin === "/admin" ? <AdminDashboard /> : <ClientRouting />}</>
      ) : (
        <h1> Data is loading please wait a few moment</h1>
      )} */}
    </div>
  );
}

export default App;
