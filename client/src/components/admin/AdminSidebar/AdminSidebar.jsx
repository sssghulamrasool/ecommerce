import React from "react";
import "./AdminSidebar.css";
import { AdminSidebarMenu } from "../../../data/AdminSidebarMenu";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/SeoSiteSoft-logo-dark.png";
const AdminSidebar = () => {
  return (
    <section className="AdminSidebar">
      <div className="admin--sidebar--logo">
        <Link to="/">
          <img src={logo} alt="seositesoft" className="img-fluid" />
        </Link>
      </div>
      <div className="admin--sidebar--menu">
        <ul>
          {AdminSidebarMenu.map((element) => {
            return (
              <li key={element.id}>
                <NavLink to={"admin/" + element.link}>
                  <span className="menu--right--side--arrow">
                    <i className="fa-solid fa-right-long"></i>
                  </span>
                  <span className="menu--right--side--name">
                    {element.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AdminSidebar;
