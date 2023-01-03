import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GETFORMSESSIONSTORANGE } from "../../../utlis/GetLocalCart";
import { CLIENTLOGINDATA } from "../../../utlis/ClientLogin";
import { json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./Checkout.css";
const Checkout = () => {
  const navigate = useNavigate();
  const { allProduct, checkout } = useSelector((state) => state.Reduder);
  const local = GETFORMSESSIONSTORANGE();
  const dispatch = useDispatch();
  const [checkoutItem, setCheckOutItem] = useState([]);
  const [clientid, setClientId] = useState(CLIENTLOGINDATA());
  const [checkoutOrderDetailForm, setCheckoutOrderDetailForm] = useState({
    fullname: "",
    countyname: "",
    address: "",
    state: "",
    zipcode: "",
    ordernotes: "",
    selectpaymentmethod: "",
    email: "",
    phone: "",
  });

  const onChangeCheckoutInputs = (event) => {
    setCheckoutOrderDetailForm({
      ...checkoutOrderDetailForm,
      [event.target.name]: event.target.value,
    });
  };

  const checkoutData = () => {
    // let cartItem = local.map((elem) => {
    //   let productId = elem.productId;
    //   let productQty = elem.productQty;
    //   return { productId, productQty };
    // });
    // const cartItems = [];
    // for (var i = 0; i < cartItem.length; i++) {
    //   allProduct.filter((elem) => {
    //     if (cartItem[i].productId === elem._id) {
    //       cartItems.push({ ...elem, productQty: cartItem[i].productQty });
    //     }
    //   });
    // }
    // return cartItems;

    let cartItemsforOrder = [];
    let localstoragedata = local.map((el) => {
      let productId = el.productId;
      let productQty = el.productQty;
      return { productQty, productId };
    });

    for (var i = 0; i < local.length; i++) {
      allProduct.filter((data) => {
        // data._id === localstoragedata[i].productId &&
        //   cartItemsforOrder.push({
        //     ...data,
        //     productQty: localstoragedata[i].productQty,
        //   });
        // product_id: String,
        // name: String,
        // quantity: Number,
        // single_total: Number,
        // image: String,
        if (data._id === localstoragedata[i].productId) {
          cartItemsforOrder.push({
            product_id: data._id,
            name: data.name,
            quantity: localstoragedata[i].productQty,
            single_total: data.price * localstoragedata[i].productQty,
            single_price: data.price,
            image: data.productImages[0],
          });
        }
      });
    }
    return cartItemsforOrder;
  };

  const totalPrice = checkout.reduce((total, cel, cin, ar) => {
    return total + cel.single_total;
  }, 0);

  useEffect(() => {
    setCheckOutItem(checkoutData());
    dispatch({
      type: "CHECKOUT",
      payload: checkoutData(),
    });
  }, []);

  const checkoutForm = (e) => {
    e.preventDefault();

    if (
      checkoutOrderDetailForm.fullname.length < 3 ||
      checkoutOrderDetailForm.phone.length < 3 ||
      checkoutOrderDetailForm.email.length < 3 ||
      checkoutOrderDetailForm.countyname.length < 3 ||
      checkoutOrderDetailForm.address.length < 3 ||
      checkoutOrderDetailForm.state.length < 3 ||
      checkoutOrderDetailForm.zipcode.length < 3
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please all filed are required ",
      });
    } else {
      fetch("http://localhost:9090/order/postorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...checkoutOrderDetailForm,
          customer_id: clientid,
          total: totalPrice,
          products_items: checkoutItem,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status === 1) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your have been successfully",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate(`/checkout/${data.data._id}`);
            // setTimeout(() => {
            //   localStorage.setItem("cartProduct", JSON.stringify([]));
            //   navigate("/");
            //   dispatch({
            //     type: "CHECKOUT",
            //     payload: [],
            //   });
            // }, 1500);
          }
        });
    }
  };
  return (
    <section className="Checkout">
      <div className="container-xxl">
        <form onSubmit={checkoutForm} className="checkout--form">
          <div className="row">
            <div className="col">
              <h2 className="title--for--all">Checkout</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <h4 className="title--for--all">Billing Details</h4>
              <div className="billing--detail">
                <div className="mb-2">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={checkoutOrderDetailForm.fullname}
                    name="fullname"
                    onChange={onChangeCheckoutInputs}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={checkoutOrderDetailForm.phone}
                    name="phone"
                    onChange={onChangeCheckoutInputs}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={checkoutOrderDetailForm.email}
                    name="email"
                    onChange={onChangeCheckoutInputs}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Country Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={checkoutOrderDetailForm.countyname}
                    onChange={onChangeCheckoutInputs}
                    name="countyname"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label"> address </label>
                  <input
                    type="text"
                    className="form-control"
                    value={checkoutOrderDetailForm.address}
                    onChange={onChangeCheckoutInputs}
                    name="address"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">State </label>
                  <select
                    className="form-select"
                    value={checkoutOrderDetailForm.state}
                    onChange={onChangeCheckoutInputs}
                    name="state"
                  >
                    <option defaultValue=""> Select Your State</option>
                    <option value="azakdkashmir">Azad Kashmir</option>
                    <option value="islamabad">
                      Islamabad Capital Territory
                    </option>
                    <option value="punjab">Punjab</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="form-label">Zip Code </label>
                  <input
                    type="text"
                    className="form-control"
                    value={checkoutOrderDetailForm.zipcode}
                    onChange={onChangeCheckoutInputs}
                    name="zipcode"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Order notes (optional)</label>
                  <textarea
                    className="form-control"
                    name="ordernotes"
                    value={checkoutOrderDetailForm.ordernotes}
                    onChange={onChangeCheckoutInputs}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="your--order--details">
                <h4 className="title--for--all"> Your Order</h4>

                {checkoutItem.map((element) => {
                  return (
                    <div className="about--order" key={element.product_id}>
                      <h5 className="product--name">
                        <span> {element.name} </span>* {element.quantity}
                      </h5>
                      <h5 className="product--price">{element.single_total}</h5>
                    </div>
                  );
                })}

                <div className="about--order">
                  <h5 className="product--name">Total Price </h5>
                  <h5 className="product--price">{totalPrice}</h5>
                </div>
                <div className="order--payment">
                  <div className="selectpaymentmethod">
                    <input
                      type="radio"
                      id="cash-on-deliver"
                      value="cash-on-deliver"
                      name="selectpaymentmethod"
                      onChange={onChangeCheckoutInputs}
                    />
                    <label htmlFor="cash-on-deliver">Cash on delivery.</label>
                  </div>
                  <div className="selectpaymentmethod">
                    <input
                      type="radio"
                      id="pay-with-card"
                      value="pay-with-card"
                      name="selectpaymentmethod"
                      onChange={onChangeCheckoutInputs}
                    />
                    <label htmlFor="pay-with-card">Pay with card</label>
                  </div>
                </div>
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
                <button className="custom-btn"> Place order</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
