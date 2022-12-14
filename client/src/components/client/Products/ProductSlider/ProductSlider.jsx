import React from "react";
import "./ProductSlider.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <Slider {...settings}>
        {products.map((element) => {
          return (
            <div className=" home--product--item" key={element._id}>
              <div className="product--image">
                <img
                  src={`http://localhost:9090/${element.productImages[0]}`}
                  alt=""
                  className="img-fluid"
                />
                {element.feature && (
                  <div className="new--product">
                    <i className="fa-solid fa-crown"></i>
                  </div>
                )}
              </div>
              <div className="product--detail">
                <h5 className="category">
                  {" "}
                  Category :{" "}
                  <span className={`${element.category}`}>
                    {element.category}
                  </span>
                </h5>
                <h4>{element.name}</h4>
                <p className="price">
                  RS : <span>{element.price}</span>
                </p>
                <div className="product--extra">
                  <Link
                    to={`/single-product/${element._id}`}
                    className="add--to--cart--link"
                  >
                    <span className="add--to--cart--icon">
                      <i className="fa-solid fa-basket-shopping"></i>
                    </span>
                    view more
                  </Link>
                  <span className="view--product--details">
                    <i className="fa-regular fa-eye"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default ProductSlider;
