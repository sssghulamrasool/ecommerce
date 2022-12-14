import React from "react";
import books from "../../../assets/images/books.jpg";
import shoes from "../../../assets/images/shoes.jpg";
import flowers from "../../../assets/images/flowers.jpg";
import "./HomeCategories.css";
import { Link } from "react-router-dom";

const HomeCategories = () => {
  return (
    <section className="category">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <h3 className="title--for--all">categories</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="category--items--wrapper">
              <div className="category--item">
                <div className="category--overlay"></div>
                <img src={flowers} alt="" className="img-fluid" />
                <Link to="/category/Flower">
                  {" "}
                  <h4> Flower</h4>
                </Link>
              </div>
              <div className="category--item">
                <div className="category--overlay"></div>

                <img src={books} alt="" className="img-fluid" />
                <Link to="/category/Book">
                  <h4> Book</h4>
                </Link>
              </div>
              <div className="category--item">
                <div className="category--overlay"></div>
                <img src={shoes} alt="" className="img-fluid" />
                <Link to="/category/Shoes">
                  <h4> Shoes</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
