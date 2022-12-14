import React from "react";
import { useState } from "react";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const Register = () => {
  const [adminRegister, setAdminRegister] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    picture: "",
  });
  const [erroMessage, setErrorMessage] = useState({});
  const [loading, setloading] = useState(true);
  const [errMsg, setErrMsg] = useState(false);

  const hanldeAdminRegister = (e) => {
    e.preventDefault();

    var mailformat = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    const formData = new FormData();
    formData.append("name", adminRegister.name);
    formData.append("email", adminRegister.email);
    formData.append("password", adminRegister.password);
    formData.append("phone", adminRegister.phone);
    formData.append("address", adminRegister.address);
    formData.append("picture", adminRegister.picture);
    if (adminRegister.email.match(mailformat)) {
      fetch("http://localhost:9090/admin/adminLogin", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setAdminRegister({
            name: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            picture: "",
          });
        });
    } else {
      toast.error(" Please Enter Your Email 👆👆!", {
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
  };
  const hanldeOnChange = (e) => {
    setAdminRegister({ ...adminRegister, [e.target.name]: e.target.value });
  };
  const hanldeOnChangepicture = (e) => {
    setAdminRegister({
      ...adminRegister,
      [e.target.name]: e.target.files[0],
    });
  };

  const [hideShow, setHideShow] = useState(false);
  return (
    <section className="register">
      <div className="container-fluid">
        <form
          className="register--form"
          onSubmit={hanldeAdminRegister}
          autoComplete="off"
        >
          <div className="mb-3">
            <h4 className="admin--title"> Admin Register</h4>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              className="form-control"
              name="name"
              autoComplete="off"
              value={adminRegister.name}
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
              name="email"
              value={adminRegister.email}
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
              value={adminRegister.password}
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
              name="phone"
              autoComplete="off"
              value={adminRegister.phone}
              onChange={hanldeOnChange}
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              autoComplete="off"
              value={adminRegister.address}
              onChange={hanldeOnChange}
              placeholder="Enter Your address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Picture</label>
            <input
              type="file"
              className="form-control"
              name="picture"
              onChange={hanldeOnChangepicture}
            />
          </div>
          <button type="submit" className="custom-btn">
            register
          </button>
          <p className="create--account">
            <Link to="/admin/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
