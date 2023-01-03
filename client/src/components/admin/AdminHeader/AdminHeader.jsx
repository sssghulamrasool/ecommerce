import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./AdminHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AdminHeader = ({ admin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileDetailshow, setProfileShow] = useState(false);

  const logoutBtn = () => {
    sessionStorage.clear();
    navigate("/admin/login");
    dispatch({
      type: "ADMIN",
      payload: {},
    });
    setProfileShow(false);
  };

  // const name = admin?.name;
  // const firstname = name?.split(" ").slice(0, 1).join("");
  // const lastname = name?.split(" ").slice(1, 2).join("").charAt(0);
  return (
    <section className="AdminHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="admin--details">
              <div className="role--admin">
                <span
                  className="menu--colose--from--admin"
                  // onClick={sidebarToggle}
                >
                  <i className="fa-solid fa-list"></i>
                </span>
              </div>
              {admin >= 1 ? (
                <div className="profile--admin">
                  {/* <h5>{firstname + " " + lastname + "."}</h5> */}
                  <span
                    className="menu--profile--img"
                    onClick={() => {
                      setProfileShow(!profileDetailshow);
                    }}
                  >
                    <img
                      src={admin?.picture}
                      alt={admin?.name}
                      className="img-fluid"
                    />
                  </span>
                </div>
              ) : (
                <div className="admin--logins">
                  <ul>
                    <li>
                      <NavLink to={`/admin/login`}>login</NavLink>
                    </li>
                    <li>
                      <NavLink to={`/admin/create-account`}>register</NavLink>
                    </li>
                  </ul>
                </div>
              )}
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
            {/* <li>
              <Link to={`/admin/login`}>login</Link>
            </li>
            <li>
              <Link to={`/admin/create-account`}>register</Link>
            </li> */}
            <li>
              <Link onClick={logoutBtn} to="/admin/login">
                logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default AdminHeader;
