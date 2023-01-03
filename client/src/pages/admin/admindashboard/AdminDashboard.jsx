import React from "react";
import AdminHeader from "../../../components/admin/AdminHeader/AdminHeader";
import AdminSidebar from "../../../components/admin/AdminSidebar/AdminSidebar";
import AdminFooter from "../../../components/admin/AdminFooter/AdminFooter";
import Routing from "../../../routes/Routing";
import "./AdminDashboard.css";
import { useSelector } from "react-redux";
import { Login } from "../adminPage";
const AdminDashboard = () => {
  const { admin } = useSelector((state) => state.Reduder);

  return (
    <>
      {admin === null ? (
        <Login />
      ) : (
        <section className="admin--dashboard">
          <div className="admin--row">
            <div className="column-1">
              <AdminSidebar />
            </div>
            <div className="column-2">
              <div className="admin--dashboard">
                <AdminHeader />
                <Routing />
                <AdminFooter />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AdminDashboard;
