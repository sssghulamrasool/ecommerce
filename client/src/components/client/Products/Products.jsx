import React from "react";
import "./Products.css";
import ProductSlider from "./ProductSlider/ProductSlider";
const Products = ({ product }) => {
  return (
    <section className="home--products">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <h3 className="title--for--all">
              Highly Customizable all Products{" "}
            </h3>
          </div>
        </div>
        <div className="row home--product--section--wrapper">
          <div className="col p-0">
            <ProductSlider products={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
