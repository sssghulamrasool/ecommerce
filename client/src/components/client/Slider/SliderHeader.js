import React from "react";

import lgo from "../../../assets/images//logobew.webp";
const SliderHeader = () => {
  return (
    <>
      <>
        <div className="Upper_row">
          <div className="container-xxl">
            <div className="row  Upper_row2">
              <div className="col-lg-2 col-md-2">
                <img src={lgo} alt="seositesoft" className="img-fluid" />
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="input_fields">
                  <input className="input form-control" />
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="d-flex justify-content-end">
                  <div className="iocns">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="iocns mx-2">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="lower_header">
          <div className="container-xxl">
            <div className="row justify-content-center align-items-center lower_header2">
              <div className="col-lg-10 col-md-12 col-sm-12">
                <nav>
                  <ul>
                    <li>About Us</li>
                    <li>Affliate</li>
                    <li>Return Policy</li>
                    <li>Shipping & Return</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SliderHeader;
