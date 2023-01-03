import React from "react";
import "./UserDashboard.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CLIENTLOGINDATA } from "../../../utlis/ClientLogin";
import { useState } from "react";
const UserDashboard = () => {
  // const { clientCreditional, allorder } = useSelector((state) => state.Reduder);
  const state = useSelector((state) => state.Reduder);

  // const clinetid = CLIENTLOGINDATA();
  const [loading, setloading] = useState(true);

  // let customerOrders = [];
  // state.allorder.filter((element) => {
  //   if (element.customer_id === clinetid) {
  //     customerOrders.push(element);
  //   }
  // });

  return (
    <>
      {loading ? <h1>Data is loading</h1> : ""}
      <section className="UserDashboard">
        <div className="container-xxl">
          <div className="row">
            <div className="col">
              <h4 className="user--dashboard--title"> my account </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Dashboard
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Orders
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Account Details
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h4>
                    Wellcome <b> {"clientCreditional.name"}</b>
                  </h4>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <table className="table w-100 table-bordered  my--account--order--table">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#67</td>
                        <td>Dec 2, 2022</td>
                        <td>Completed</td>
                        <td>
                          Pk : 22 for <span>2</span> item
                        </td>
                        <td>
                          <button className="my-account--view--btn">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className=" account--detailss">
                    <div className="row--divv">
                      <h4> Name :</h4>
                      <p>{"clientCreditional.name"}</p>
                    </div>
                    <div className="row--divv">
                      <h4> email :</h4>
                      <p>{"clientCreditional.email"}</p>
                    </div>
                    <div className="row--divv">
                      <h4> password :</h4>
                      <p>{"clientCreditional.password"}</p>
                    </div>
                    <div className="row--divv">
                      <h4> phone :</h4>
                      <p>{"clientCreditional.phone"}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  hh@yahoo.com
                </div>
                {/* <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <h2 className="order--billing--title">logout</h2>

            <div className="order--views">
              <p>
                Order <strong>#26</strong> was placed on{" "}
                <strong>December 5, 2022</strong>
                and is currently <strong>Processing</strong>.
              </p>
              <div className="order-product-detail">
                <div className="produc--details">
                  <div className="header--product--details">
                    <div className="product--name">Product</div>
                    <div className="product--name">Total </div>
                  </div>
                  <div className="prod--row">
                    <div className="product--name">Product * 2</div>
                    <div className="product--value">45 * 2 </div>
                  </div>

                  <div className="prod--row">
                    <div className="product--name">Payment Method </div>
                    <div className="product--value">9000</div>
                  </div>
                  <div className="prod--row">
                    <div className="product--name">total </div>
                    <div className="product--value">9000</div>
                  </div>
                </div>
                <div className=" account--detailss">
                  <h2 className="order--billing--title">billing Addres</h2>
                  <div className="row--divv">
                    <h4> Name :</h4>
                    <p>Ghulam Rasool</p>
                  </div>
                  <div className="row--divv">
                    <h4> email :</h4>
                    <p>Ghulam Rasool</p>
                  </div>
                  <div className="row--divv">
                    <h4> password :</h4>
                    <p>Ghulam Rasool</p>
                  </div>
                  <div className="row--divv">
                    <h4> phone :</h4>
                    <p>Ghulam Rasool</p>
                  </div>
                  <div className="row--divv">
                    <h4> address :</h4>
                    <p>Ghulam Rasool</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
