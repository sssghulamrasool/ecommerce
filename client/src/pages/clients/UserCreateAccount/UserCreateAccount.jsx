import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserCreateAccount.css";
import { ToastContainer, toast } from "react-toastify";

const UserCreateAccount = () => {
  const [userCreateAcc, setUserCreateAcc] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    uphone: "",
    uaddress: "",
  });
  const [hideShow, setHideShow] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const hanldeOnChange = (e) => {
    setUserCreateAcc({ ...userCreateAcc, [e.target.name]: e.target.value });
  };
  const hanldeUserAccount = (e) => {
    e.preventDefault();

    if (
      !userCreateAcc.uaddress ||
      !userCreateAcc.uemail ||
      !userCreateAcc.uname ||
      !userCreateAcc.upassword ||
      !userCreateAcc.uphone === " "
    ) {
      // console.log("sory spled are emety");
    }
    fetch("http://localhost:9090/user/userCreateAcc", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreateAcc),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.mess === 0) {
          toast.error("All field are required", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (data.mess === 1) {
          sessionStorage.setItem(
            "userId",
            JSON.stringify({
              name: data.datta.name,
              id: data.datta._id,
            })
          );
          toast.success("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (data.mess === 3) {
          toast.error("email allread existed", {
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
    <section className="user--createAcc">
      <div className="container-fluid">
        <form
          className="user--createAcc--form"
          onSubmit={hanldeUserAccount}
          autoComplete="off"
        >
          <div className="mb-3">
            <h4 className="admin--title"> User Register</h4>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              className="form-control"
              name="uname"
              autoComplete="off"
              value={userCreateAcc.uname}
              onChange={hanldeOnChange}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            {errMsg && (
              <p className="errmessage">
                this email is allready exited please try again
              </p>
            )}

            <input
              type="email"
              className="form-control"
              name="uemail"
              value={userCreateAcc.uemail}
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
              name="upassword"
              placeholder="*******"
              autoComplete="off"
              value={userCreateAcc.upassword}
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
          <div className="mb-3">
            <label className="form-label">Phone</label>

            <input
              type="number"
              className="form-control"
              name="uphone"
              autoComplete="off"
              value={userCreateAcc.uphone}
              onChange={hanldeOnChange}
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              type="text"
              className="form-control"
              name="uaddress"
              autoComplete="off"
              value={userCreateAcc.uaddress}
              onChange={hanldeOnChange}
              placeholder="Enter Your address"
            />
          </div>

          <button type="submit" className="custom-btn">
            register
          </button>
          <p className="create--account">
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default UserCreateAccount;
