import React from "react";
import "./FeatureSlider.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const FeatureSlider = ({ featureProducts }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <>
      <Slider {...settings} className="testing">
        {featureProducts.map((element) => {
          return (
            <div className="feature--product--item" key={element._id}>
              <div className="feature--product--image">
                <img
                  src={`http://localhost:9090/${element.productImages[0]}`}
                  className="img-fluid"
                  alt={element.name}
                />
                <div className="new--product">
                  <i className="fa-solid fa-crown"></i>
                </div>
              </div>
              <div className="feature--product--detail">
                <h5 className="category">
                  {" "}
                  Category :{" "}
                  <span className={`${element.category}`}>
                    {element.category}
                  </span>
                </h5>
                <h4>{element.name}</h4>
                <p className="price">
                  RS : <span>{element.price} </span>
                </p>

                <div className="feature--product--extra">
                  <Link
                    className="add--to--cart--link"
                    to={`/single-product/${element._id}`}
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

export default FeatureSlider;
