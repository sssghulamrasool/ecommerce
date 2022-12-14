import React, { useEffect, useState } from "react";
import ForgetPassword from "../../../components/client/ForgetPassword/ForgetPassword";
import { ToastContainer, toast } from "react-toastify";

const FindUserPassword = () => {
  const [userCredentialEmail, setCredentialEmail] = useState("");

  const [findUser, setFindUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [forGetData, setForGetData] = useState({});
  const hanldeSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9090/user/userForgetFind", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userCredentialEmail,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.mess === 1) {
          setForGetData(data.data);
          setFindUser(true);
        }
        toast.error(`${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <section className="UserLogin">
      <div className="container-xxl">
        {findUser ? (
          <ForgetPassword forGetData={forGetData} />
        ) : (
          <div className="row">
            <div className="col-8 m-auto">
              <form
                className="user--login--form"
                autoComplete="off"
                onSubmit={hanldeSubmit}
              >
                <div className="mb-3">
                  <h4 className="admin--title"> Forget Login</h4>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email address</label>

                  <input
                    type="email"
                    className="form-control"
                    name="userEmail"
                    autoComplete="off"
                    placeholder="Enter Your Valid Email"
                    value={userCredentialEmail}
                    onChange={(e) => setCredentialEmail(e.target.value)}
                  />
                  <ToastContainer />
                </div>
                {/* <div className="mb-3 position-relative">
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
              </div> */}

                <button type="submit" className="custom-btn">
                  find user
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindUserPassword;
