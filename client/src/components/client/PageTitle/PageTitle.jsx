import React from "react";
import { Link } from "react-router-dom";
import "./PageTitle.css";
const PageTitle = ({ title }) => {
  return (
    <div className="PageTitle">
      <h2 className="page--title">
        <Link to="/">Category</Link> / <span>{title}</span>
      </h2>
    </div>
  );
};

export default PageTitle;
