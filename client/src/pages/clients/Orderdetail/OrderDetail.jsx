import React from "react";
import "./OrderDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderResponse, setOrderResponse] = useState({});
  useEffect(() => {
    fetch("http://localhost:9090/order/vieworder")
      .then((response) => response.json())
      .then((data) => {
        data.data.filter((el) => {
          if (el._id === id) {
            setOrderResponse(el);
            setLoading(true);
          }
        });
      });
  }, []);
  let date = new Date(orderResponse.createdAt);

  // setTimeout(() => {
  //   navigate("/dashboard");
  // }, 3000);
  return (
    <>
      {loading ? (
        <div className="OrderDetail">
          <div className="container-xxl">
            <div className="row">
              <div className="col">
                <h5 className="thanksorder">
                  Thank you. Your order has been received.
                </h5>

                <ul className="order-detail">
                  <li>
                    order number
                    <strong>{orderResponse.order_key}</strong>
                  </li>
                  <li>
                    date
                    <strong>
                      {date.getMonth() +
                        1 +
                        " / " +
                        date.getDate() +
                        " / " +
                        date.getFullYear()}
                    </strong>
                  </li>
                  <li>
                    email
                    <strong>{orderResponse.billing.email}</strong>
                  </li>
                  <li>
                    total
                    <strong>
                      {new Intl.NumberFormat().format(orderResponse.total)}
                    </strong>
                  </li>
                  <li>
                    payment method
                    <strong>
                      {orderResponse.payment_method.split("-").join(" ")}
                    </strong>
                  </li>
                </ul>

                <div className="row m-0 detaill---">
                  <div className="col-6 p-0">
                    <div className="billing--addres first">
                      <table className="table ">
                        <tbody>
                          <tr>
                            <th> Full Name</th>
                            <td> {orderResponse.billing.full_name}</td>
                          </tr>
                          <tr>
                            <th> Email</th>
                            <td> {orderResponse.billing.email}</td>
                          </tr>
                          <tr>
                            <th> phone</th>
                            <td> {orderResponse.billing.phone}</td>
                          </tr>
                          <tr>
                            <th> country</th>
                            <td>{orderResponse.billing.country}</td>
                          </tr>
                          <tr>
                            <th> postcode</th>
                            <td>{orderResponse.billing.postcode}</td>
                          </tr>
                          <tr>
                            <th> state</th>
                            <td>{orderResponse.billing.state}</td>
                          </tr>
                          <tr>
                            <th> address</th>
                            <td>{orderResponse.billing.address}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-6 p-0">
                    <div className="billing--addres second">
                      <table className="table ">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderResponse.product_items.map((item) => {
                            return (
                              <tr key={item._id}>
                                <td>
                                  {item.name}
                                  <b> * {item.quantity}</b>
                                </td>
                                <td>
                                  {" "}
                                  {new Intl.NumberFormat().format(
                                    item.single_total
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Total: </th>
                            <th>
                              {new Intl.NumberFormat().format(
                                orderResponse.total
                              )}
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loadind </h1>
      )}
    </>
  );
};

export default OrderDetail;
