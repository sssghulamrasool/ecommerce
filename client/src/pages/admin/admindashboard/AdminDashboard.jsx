import React from "react";
import AdminHeader from "../../../components/admin/AdminHeader/AdminHeader";
import AdminSidebar from "../../../components/admin/AdminSidebar/AdminSidebar";
import AdminFooter from "../../../components/admin/AdminFooter/AdminFooter";
import Routing from "../../../routes/Routing";
import "./AdminDashboard.css";
import { useSelector } from "react-redux";
const AdminDashboard = () => {
  const state = useSelector((state) => state.Reduder);
  return (
    <section className="admin--dashboard">
      <div className="admin--row">
        <div className="column-1">
          <AdminSidebar />
        </div>
        <div className="column-2">
          <div className="admin--dashboard">
            <AdminHeader admin={state.admin} />
            <Routing />
            <AdminFooter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
