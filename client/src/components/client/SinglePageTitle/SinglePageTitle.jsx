import React from "react";
import { Link } from "react-router-dom";
import "./SinglePageTitle.css";
const SinglePageTitle = ({ cate, title }) => {
  return (
    <div className="SinglePageTitle">
      <h4>
        Category {cate} / {title}
      </h4>
    </div>
  );
};

export default SinglePageTitle;
