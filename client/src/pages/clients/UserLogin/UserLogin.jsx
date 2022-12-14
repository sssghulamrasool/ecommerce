import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./UserLogin.css";
const UserLogin = () => {
  const [hideShow, setHideShow] = useState(false);
  const [userCredential, setCredential] = useState({
    userEmail: "",
    userPassword: "",
  });
  const navigate = useNavigate();
  const handelOnChange = (e) => {
    setCredential({ ...userCredential, [e.target.name]: e.target.value });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9090/user/userLogin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredential),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.mess === 1) {
          toast.success(" successfully login ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          // setTimeout(() => {
          //   navigate("/");
          // }, 1500);
        } else {
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  return (
    <section className="UserLogin">
      <div className="container-xxl">
        <div className="row">
          <div className="col-8 m-auto">
            <form
              className="user--login--form"
              autoComplete="off"
              onSubmit={hanldeSubmit}
            >
              <div className="mb-3">
                <h4 className="admin--title"> Customer Login</h4>
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>

                <input
                  type="email"
                  className="form-control"
                  name="userEmail"
                  autoComplete="off"
                  placeholder="Enter Your Valid Email"
                  value={userCredential.userEmail}
                  onChange={handelOnChange}
                />
              </div>
              <div className="mb-3 position-relative">
                <label className="form-label">Password</label>
                <input
                  type={hideShow ? "text" : "password"}
                  className="form-control"
                  name="userPassword"
                  placeholder="*******"
                  autoComplete="off"
                  value={userCredential.userPassword}
                  onChange={handelOnChange}
                />
                <div
                  className="passwordicon"
                  onClick={() => setHideShow(!hideShow)}
                >
                  <span className="icon">
                    {hideShow ? (
                      <i className="fa-regular fa-eye" />
                    ) : (
                      <i className="fa-regular fa-eye-slash" />
                    )}
                  </span>
                </div>
                <span className="icon"></span>
              </div>

              <button type="submit" className="custom-btn">
                Login
              </button>
              <ToastContainer />

              <p className="forget--password">
                <Link to="/forget-password">Forgot your password?</Link>
              </p>
              <p className="use--create--account">
                <Link to="/create-account">Create Account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
