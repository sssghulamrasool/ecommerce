import React from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";
import profileAdmin from "../../../assets/images/profile ung.webp";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const AdminHeader = ({ admin }) => {
  const dispatch = useDispatch();
  const [profileDetailshow, setProfileShow] = useState(false);
  const sidebarToggle = () => {
    dispatch({
      type: "MENUSIDETOGGLE",
    });
  };

  console.log("aahmin header", admin);
  return (
    <section className="AdminHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="admin--details">
              <div className="role--admin">
                <span
                  className="menu--colose--from--admin"
                  onClick={sidebarToggle}
                >
                  <i className="fa-solid fa-list"></i>
                </span>
              </div>
              <div className="profile--admin">
                <h5>Admin</h5>
                <span
                  className="menu--profile--img"
                  onClick={() => {
                    setProfileShow(!profileDetailshow);
                  }}
                >
                  <img src={profileAdmin} alt="" className="img-fluid" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {profileDetailshow ? (
        <div className="admin--profile--detilass--set">
          <ul>
            <li>
              <Link to={`/admin/admin-profile`}>profile</Link>
            </li>
            <li>
              <Link to={`/admin/login`}>login</Link>
            </li>
            <li>
              <Link to={`/admin/create-account`}>register</Link>
            </li>
            <li>
              <Link to={`/admin/`}>logout</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default AdminHeader;
