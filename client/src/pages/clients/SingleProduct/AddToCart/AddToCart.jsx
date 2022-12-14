import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GETFORMSESSIONSTORANGE } from "../../../../utlis/GetLocalCart";
// const GETFORMSESSIONSTORANGE = () => {
//   const items = localStorage.getItem("cartProduct");
//   if (items) {
//     return JSON.parse(localStorage.getItem("cartProduct"));
//   } else {
//     return [];
//   }
// };
const AddToCart = ({ stock, singleproduct }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartProductItem, setCartProductItem] = useState(
    GETFORMSESSIONSTORANGE()
  );
  const [quantity, setquantity] = useState(1);
  const qunatityChange = (e) => {
    if (Number(e.target.value) < -1 || Number(e.target.value) === 0) {
      setquantity(1);
    } else if (Number(e.target.value) > stock) {
      toast.error(`Please don't crose the limit  🙏 ${stock}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setquantity(stock);
    } else {
      setquantity(Number(e.target.value));
    }
  };
  const qunatityIncrement = () => {
    setquantity(quantity >= stock ? stock : quantity + 1);
  };
  const qunatityDecrement = () => {
    setquantity(quantity === 1 ? 1 : quantity - 1);
  };

  const submitAddToCart = (e) => {
    e.preventDefault();

    const singleAddToCart = {
      productId: singleproduct._id,
      productQty: quantity,
    };
    const exisitedProduct = cartProductItem.find(
      (currentElement) => currentElement.productId === singleproduct._id
    );
    if (exisitedProduct) {
      const qtyUpdated = cartProductItem.map((el) =>
        el.productId === singleproduct._id
          ? { ...el, productQty: quantity }
          : el
      );
      setCartProductItem(qtyUpdated);
    } else {
      setCartProductItem([...cartProductItem, singleAddToCart]);
    }
  };
  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProductItem));

    dispatch({
      type: "CARTPRODUCT",
      payload: cartProductItem,
    });
  }, [cartProductItem]);
  return (
    <>
      <div className="add--to--cart--quantity">
        <div className="decrement--quantity" onClick={qunatityDecrement}>
          &#8722;
        </div>
        <input
          type="text"
          className="number--quantity"
          value={quantity}
          name={quantity}
          onChange={qunatityChange}
        />
        <ToastContainer />
        <div className="increment--quantity" onClick={qunatityIncrement}>
          &#x2b;
        </div>
      </div>

      <div className="add--to--cart--btn">
        <Link onClick={submitAddToCart}>
          <i className="fa-solid fa-basket-shopping"></i> add to cart
        </Link>
      </div>
    </>
  );
};

export default AddToCart;
