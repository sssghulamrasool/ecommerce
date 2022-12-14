import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ForgetPassword = ({ forGetData }) => {
  const [newForget, setNewForget] = useState("");
  const navigate = useNavigate("");

  const [hideShow, setHideShow] = useState(false);
  const hanldeSubmit = (e) => {
    e.preventDefault();

    let email = forGetData.email;
    fetch("http://localhost:9090/user/userUpdated", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newForget,
        email,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/");
        window.location.reload();
        return data;
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-8 m-auto">
          <form
            className="user--login--form"
            onSubmit={hanldeSubmit}
            autoComplete="off"
          >
            <div className="mb-3">
              <h4 className="admin--title"> Forget Password</h4>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>

              <input
                type="email"
                className="form-control"
                name="userEmail"
                autoComplete="off"
                placeholder="Enter Your Valid Email"
                value={forGetData.email}
                readOnly
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
                value={newForget}
                onChange={(e) => setNewForget(e.target.value)}
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
              Forget Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
