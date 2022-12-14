import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import sigle from "../../../assets/images/titlebar.jpg";
import "./SingleProduct.css";
import SinglePageTitle from "../../../components/client/SinglePageTitle/SinglePageTitle";
import ImageGallaryBox from "./ImageGallaryBox/ImageGallaryBox";
import AddToCart from "./AddToCart/AddToCart";
import { useState } from "react";
const SingleProduct = () => {
  const [show, sethide] = useState(false);
  const { id } = useParams();
  const [singleproduct] = useSelector((state) =>
    state.Reduder.allProduct.filter((element) => element._id === id)
  );

  return (
    <>
      <>
        <SinglePageTitle
          cate={singleproduct.category}
          title={singleproduct.name}
        />
        <section className="SingleProduct">
          <div className="container-xxl">
            <div className="row single--product--top">
              <div className="col-lg-6">
                <div className="single--product--left--image--box">
                  <ImageGallaryBox gallary={singleproduct.productImages} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single--product--right">
                  <h4 className="sigle--product--name">{singleproduct.name}</h4>
                  <p className="sigle--product--price">
                    RS : <span>{singleproduct.price}.00</span>
                  </p>

                  <p className="sigle--product--stock--quantity">
                    Availability :{" "}
                    <span>
                      {" "}
                      {singleproduct.stock_quantity > 1
                        ? "stock"
                        : "outstock"}{" "}
                      {singleproduct.stock_quantity}
                    </span>
                  </p>
                  <p className="sigle--product--category">
                    Categories :{" "}
                    <span className="Shoes">{singleproduct.category}</span>
                  </p>
                  <p className="sigle--product--short--desc">
                    {singleproduct.short_description}
                  </p>
                  <div className="add--to--cart--wrapp">
                    <AddToCart
                      singleproduct={singleproduct}
                      stock={singleproduct.stock_quantity}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row single--product--bottom">
              <div className="col-12 ">
                <p className="single--product--desc">
                  {singleproduct.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default SingleProduct;
