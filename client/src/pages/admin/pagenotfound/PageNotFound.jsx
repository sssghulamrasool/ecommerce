import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <section className="PageNotFound">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <h4 className="p--404">404</h4>
            <Link to={"/admin/"} className="go-to--home--page">
              go to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
