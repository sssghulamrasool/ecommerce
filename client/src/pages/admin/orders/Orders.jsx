import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import "./Orders.css";
const Orders = () => {
  const { orders } = useSelector((state) => state.Reduder);
  const dispatch = useDispatch();

  const getOrders = () => {
    fetch("http://localhost:9090/order/vieworder")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "ORDERS",
          payload: data.data,
        });
      });
  };
  const deleteOrder = (id) => {
    fetch(`http://localhost:9090/order/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statuscode === 1) {
          // `${data.message}`, "Product Deleted", "success"
          Swal.fire({
            title: `${data.message}`,
            confirmButtonText: "Ok",
            text: "Product Deleted",
          }).then((result) => {
            if (result.isConfirmed) {
              getOrders();
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: `${data.message}`,
          });
        }
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <section className="Orders">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th> Order</th>
                  <th> date</th>
                  <th> status </th>
                  <th> total </th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((elem) => {
                  let datenew = new Date(elem.createdAt);
                  return (
                    <tr key={elem._id}>
                      <td>{elem.order_key}</td>
                      <td>
                        {datenew.getMonth() + 1} / {datenew.getDate() + 1} /{" "}
                        {datenew.getFullYear()}
                      </td>
                      <td>
                        {" "}
                        <span className={`staus  ${elem.orderStatus}`}>
                          {elem.orderStatus}
                        </span>
                      </td>
                      <td>{elem.total}</td>
                      <td>
                        <Link
                          className="admin--order-set"
                          to={`/admin/order-update/${elem._id}`}
                        >
                          <span className="ord--icon">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </span>
                          Edit
                        </Link>
                        <button
                          className="admin--order-set"
                          onClick={() => {
                            deleteOrder(elem._id);
                          }}
                        >
                          <span className="ord--icon">
                            <i className="fa-solid fa-trash"></i>
                          </span>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th> Order</th>
                  <th> date</th>
                  <th> status </th>
                  <th> total </th>
                  <th>action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
