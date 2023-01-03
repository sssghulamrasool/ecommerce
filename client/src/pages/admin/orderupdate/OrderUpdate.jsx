import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./OrderUpdate.css";
import { useParams, useNavigate } from "react-router-dom";
const OrderUpdate = () => {
  const { id } = useParams();
  const navigte = useNavigate();
  const { orders } = useSelector((state) => state.Reduder);
  const [changeOrderStatus, setChangeOrderStatus] = useState("");
  const [singleOrder, setSingleOrder] = useState({});
  useEffect(() => {
    const sinlgleorder = orders.find((el) => el._id === id);
    setChangeOrderStatus(sinlgleorder?.orderStatus);
    setSingleOrder(sinlgleorder);
  }, [id]);
  const hanldesubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9090/order/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderStatus: changeOrderStatus,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigte("/admin/view-order");
        // Swal.fire("Good job!", "You clicked the button!", "success");
      });
  };
  let datenew = new Date(singleOrder.createdAt);
  return (
    <section className="OrderUpdate">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="title--for--all"> Order Update </h2>
          </div>
        </div>
        <form onSubmit={hanldesubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="order-update">
                <div className=" mb-3">
                  <label className="form-label"> Order Id</label>
                  <div className="form-control">{singleOrder?.order_key}</div>
                </div>
                <div className=" mb-3">
                  <label className="form-label">full_name</label>
                  <div className="form-control">
                    {singleOrder?.billing?.full_name}
                  </div>
                </div>
                <div className=" mb-3">
                  <label className="form-label"> email</label>
                  <div className="form-control">
                    {" "}
                    {singleOrder?.billing?.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="order-update">
                <div className=" mb-3">
                  <label className="form-label"> payment_method</label>
                  <div className="form-control">
                    {singleOrder?.payment_method}
                  </div>
                </div>

                <div className=" mb-3">
                  <label className="form-label"> order Status</label>
                  <select
                    className="form-select"
                    name="changeOrderStatus"
                    value={changeOrderStatus}
                    onChange={(e) => setChangeOrderStatus(e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div className=" mb-3">
                  <label className="form-label">createdAt</label>
                  <div className="form-control">
                    {datenew.getMonth() + 1} / {datenew.getDate() + 1} /{" "}
                    {datenew.getFullYear()}
                  </div>
                </div>
                <div className=" mb-3">
                  <button type="submit" className="update--order">
                    {" "}
                    Update Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderUpdate;
