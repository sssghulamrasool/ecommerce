import React from "react";
// import "./Header.css";
import "./HeaderNew.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import seositesoftlogo from "../../assets/images/SeoSiteSoft-logo-dark.png";

import lgo from "../../assets/images/logobew.webp";
const Header = () => {
  const { totalQuantity } = useSelector((state) => state.Reduder);

  return (
    // <header>
    //   <div className="container-xxl">
    //     <div className="row align-items-center">
    //       <div className="col-lg-6">
    //         <Link to="/" className="logo">
    //           <img src={seositesoftlogo} alt="" />
    //         </Link>
    //       </div>
    //       <div className="col-lg-6">
    //         <nav className="cutom--nav">
    //           <ul>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="user/products">
    //                 products
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="user/login">
    //                 login
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <NavLink className="nav-link" to="user/create-account">
    //                 sign up
    //               </NavLink>
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link  position-relative" to="/cart">
    //                 <i className="fa-solid fa-cart-shopping"></i>
    //                 <span className="cart--total--quantity">
    //                   {totalQuantity}
    //                 </span>
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link " to="/dashboard">
    //                 Ghulam Rasool (User)
    //               </Link>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className="gr--head">
      <>
        <div className="Upper_row">
          <div className="container-xxl">
            <div className="row  Upper_row2">
              <div className="col-lg-4 col-md-2 p-0">
                <Link to="/">
                  <img src={lgo} alt="seositesoft" className="img-fluid" />
                </Link>
              </div>

              <div className="col-lg-8 col-md-5">
                <div className="d-flex justify-content-end">
                  <div className="head--clint--icon">
                    <Link to="login">sign in</Link>
                  </div>
                  <div className="head--clint--icon">
                    <Link to="create-account">Register</Link>
                  </div>
                  <div className="head--clint--icon">
                    <Link to={"dashboard"}>
                      <i className="fa-regular fa-user"></i> (Ghulam R.)
                    </Link>
                  </div>

                  <div className="head--clint--icon">
                    <Link to={"cart"}>
                      <i className="fa-solid fa-cart-shopping"></i> Shopping
                      Cart (0)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower_header">
          <div className="container-xxl">
            <div className="row justify-content-center align-items-center lower_header2">
              <div className="col-12">
                <nav className="menu--list">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>{" "}
                    <li>
                      <Link to="about">About Us</Link>
                    </li>
                    <li>
                      <Link to="products">shop</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="blog">Blog</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;
