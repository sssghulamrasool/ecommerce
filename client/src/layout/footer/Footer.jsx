import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p>2022 © All rights reserved by SeoSiteSoft</p>
          </div>
          <div className="col-6 text-end">
            <p>
              <Link to="/admin/login">Admin Login</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
