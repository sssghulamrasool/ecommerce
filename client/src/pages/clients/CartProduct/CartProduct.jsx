import "./CartProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { GETFORMSESSIONSTORANGE } from "../../../utlis/GetLocalCart";

import { useEffect, useState } from "react";
import RowCart from "./RowCart";
const CartProduct = () => {
  const dipatch = useDispatch();
  const { allProduct, cartItemLocaltoRedux } = useSelector(
    (state) => state.Reduder
  );
  const [localCart, setLocalCart] = useState(GETFORMSESSIONSTORANGE());
  let cartItem = localCart.map((elem) => {
    let productId = elem.productId;
    let productQty = elem.productQty;
    return { productId, productQty };
  });
  const cartItems = [];
  for (var i = 0; i < cartItem.length; i++) {
    allProduct.filter((elem) => {
      if (cartItem[i].productId === elem._id) {
        cartItems.push({ ...elem, productQty: cartItem[i].productQty });
      }
    });
  }
  const hanldeDelete = (getid) => {
    const local = localCart.filter((element) => {
      return element.productId !== getid;
    });
    setLocalCart(local);
  };
  const hanldeIncrement = (incrementId) => {
    const { stock_quantity } = allProduct.find((e) => incrementId === e._id);

    const locl = localCart.map((ele) => {
      if (ele.productId === incrementId) {
        console.log(
          ele.productQty >= stock_quantity ? stock_quantity : ele.productQty++
        );
      }
      return ele;
    });

    setLocalCart(locl);
    // const locl = localCart.map((ele) => {
    //   if (ele.productId === incrementId) {
    //     return {
    //       ...ele,
    //       productQty:
    //         ele.productQty >= stock_quantity
    //           ? stock_quantity
    //           : ele.productQty++,
    //     };
    //   }
    //   return ele;
    // });
    // let arr = [...localCart];
    // let changedProcduct = arr.filter(
    //   (item, index) => item.productId === incrementId
    // );
    // changedProcduct[0].productQty =
    //   changedProcduct[0].productQty >= stock_quantity
    //     ? stock_quantity
    //     : changedProcduct[0].productQty++;
    // let index = arr.findIndex(function (i) {
    //   return i.productId === incrementId;
    // });
    // let addAndRemoveCurrenProduct = [...arr];
    // addAndRemoveCurrenProduct[index] = changedProcduct[0];
    // setLocalCart(addAndRemoveCurrenProduct);
  };
  const hanldeDecrement = (incrementId) => {
    // const { stock_quantity } = allProduct.find((e) => incrementId === e._id);

    const locl = localCart.map((ele) => {
      if (ele.productId === incrementId) {
        console.log(
          // setquantity(quantity === 1 ? 1 : quantity - 1);
          ele.productQty === 1 ? 1 : ele.productQty--
        );
      }
      return ele;
    });

    setLocalCart(locl);
  };
  const totalPrice = cartItemLocaltoRedux.reduce(
    (total, curElement, index, arry) =>
      total + curElement.productQty * curElement.price,
    0
  );

  const proceedToCheckout = () => {};
  useEffect(() => {
    dipatch({
      type: "CARTITEMFORMLOCAL",
      payload: cartItems,
    });
    localStorage.setItem("cartProduct", JSON.stringify(localCart));
  }, [localCart]);

  return (
    <section className="CartProduct">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <h2 className="title--for--all">Shopping cart</h2>
          </div>
        </div>
        <div className="row">
          <div className="col cart--table">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> Sr </th>
                  <th> Product </th>
                  <th> Quantity</th>
                  <th> Price </th>
                  <th> Total Price</th>
                  <th> Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItemLocaltoRedux.length > 0 ? (
                  cartItemLocaltoRedux?.map((element, index) => {
                    return (
                      <RowCart
                        index={index}
                        key={element._id}
                        element={element}
                        hanldeDelete={hanldeDelete}
                        hanldeIncrement={hanldeIncrement}
                        hanldeDecrement={hanldeDecrement}
                      />
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}>No Item </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <button className="cartupdate"> update cart</button>
          </div>
        </div> */}
        <div className="row">
          <div className="col-6 ms-auto">
            <h2 className="cart--total"> cart total </h2>
            <div className="total--detail">
              <div className="total--box">
                <h4> sub total </h4> <b> Pk : {totalPrice} </b>
              </div>
              <div className="total--box">
                <h4> total </h4> <b> Pk : {totalPrice} </b>
              </div>
            </div>
            <button className="checkout-btn" onClick={proceedToCheckout}>
              {" "}
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartProduct;
