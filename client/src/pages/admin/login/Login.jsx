import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

import "./Login.css";
const Login = () => {
  const [adminLogin, setAdminLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hideShow, setHideShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageTrue, seteErrorMessageTrue] = useState(false);
  const hanldeOnChange = (e) => {
    setAdminLogin({ ...adminLogin, [e.target.name]: e.target.value });
  };
  const hanldeSubmitLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:9090/admin/validation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminLogin),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message === 1) {
          sessionStorage.setItem("adminId", JSON.stringify(data.data._id));
          dispatch({
            type: "ADMIN",
            payload: data.data,
          });
          navigate("/admin/dashboard");
          setErrorMessage(data.response);
          seteErrorMessageTrue(true);
        } else {
          setErrorMessage(data.response);
          seteErrorMessageTrue(true);
        }
      });
    setTimeout(() => {
      seteErrorMessageTrue(false);
    }, 1000);
  };

  return (
    <section className="login">
      <div className="container-fluid">
        <form
          className="login--form"
          onSubmit={hanldeSubmitLogin}
          autoComplete="off"
        >
          <div className="mb-3">
            <h4 className="admin--title"> Admin Login</h4>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            {/* {errMsg && ( */}
            {/* <p className="errmessage">
              this email is allready exited please try again
            </p> */}
            {/* )} */}

            <input
              type="email"
              className="form-control"
              name="email"
              value={adminLogin.email}
              onChange={hanldeOnChange}
              autoComplete="off"
              placeholder="Enter Your Valid Email"
            />
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <input
              type={hideShow ? "text" : "password"}
              className="form-control"
              name="password"
              placeholder="*******"
              autoComplete="off"
              value={adminLogin.password}
              onChange={hanldeOnChange}
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
            <ToastContainer />
          </div>
          {errorMessageTrue ? <h2 className="mb-3">{errorMessage}</h2> : null}

          <button type="submit" className="custom-btn">
            Login
          </button>
          <p className="create--account">
            <Link to="/admin/create-account">Create Account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
