import React, { useEffect } from "react";
import { useState } from "react";
import { GETFORMSESSIONSTORANGE } from "../../../utlis/GetLocalCart";
import { useDispatch } from "react-redux";
const RowCart = (props) => {
  const { element, index, hanldeDelete, hanldeIncrement, hanldeDecrement } =
    props;
  // const [qty, setQty] = useState(element.productQty);
  // const [cartItem, setCartItem] = useState(GETFORMSESSIONSTORANGE());
  // const dispatch = useDispatch();
  // localStorage testing wala dataa
  // [{"productId":"6385ee0018e3daf0c745247d","productQty":7},{"productId":"6385ef0818e3daf0c745248a","productQty":4},{"productId":"637e0d4b9173673d7271de52","productQty":49},{"productId":"6385f07418e3daf0c7452496","productQty":2},{"productId":"6385effb18e3daf0c7452491","productQty":15}]
  // const hanldeIncrement = (id) => {
  // const newdata = cartItem.map((el) => {
  //   if (el.productId === id) {
  //     // el.productQty = qty + 1;
  //     el.productQty++;
  //   }
  //   return el;
  // });
  // setQty((p) => {
  //   return p >= element.stock_quantity ? element.stock_quantity : qty + 1;
  // });
  // console.log(newvalue);
  // setQty((p) => {
  //   return p >= element.stock_quantity ? element.stock_quantity : qty + 1;
  // });
  //  elem.productId === id ? { ...elem, productQty: qty } : elem;
  // console.log(cart[0].productQty);
  // setCartItem(cart);
  // cartProductItem.map((el) =>
  //     el.productId === singleproduct._id
  //       ? { ...el, productQty: quantity }
  //       : el
  //   );
  // const increment =
  //   element.productQty >= element.stock_quantity
  //     ? element.stock_quantity
  //     : qty + 1;
  // setQty(increment);
  // console.log(qty);
  // console.log(cartItem);
  // { ...elem, productQty: qty } : elem}
  // const newsd = { productQty: qty };
  // console.log(newsd);
  // setCartItem()
  // };
  // const hanldeDecrement = (id) => {
  //   setQty((p) => {
  //     return p <= 1 ? 1 : qty - 1;
  //   });
  // };

  // const hanldeDelete = (id) => {
  //   // const newItemAfterDelete = cartItem.filter(
  //   //   (element) => element.productId !== id
  //   // );
  //   // if (newItemAfterDelete) {
  //   //   // dispatch({
  //   //   //   type: "DELETEFROMCART",
  //   //   //   payload: newItemAfterDelete,
  //   //   // });
  //   // }
  // };

  // useEffect(() => {
  //   localStorage.setItem("cartProduct", JSON.stringify(cartItem));
  // }, [qty, cartItem]);
  return (
    <>
      <tr className="quty--row">
        <td> {index + 1} </td>
        <td className="disc">
          <img
            src={`http://localhost:9090/${element.productImages[0]}`}
            alt=""
            className="img-fluid cart--img"
          />
          <span className="title">{element.name}</span>
        </td>
        <td>
          <span className="icon" onClick={() => hanldeDecrement(element._id)}>
            <i className="fa-solid fa-minus"></i>
          </span>
          <span className="qty--no">{element.productQty}</span>
          <span className="icon" onClick={() => hanldeIncrement(element._id)}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </td>
        <td>
          <b>Pk :</b> {new Intl.NumberFormat("en-IN").format(element.price)}{" "}
        </td>
        <td>
          {" "}
          <b>Pk : </b>
          {new Intl.NumberFormat("en-IN").format(
            element.price * element.productQty
          )}
        </td>
        <td>
          <span
            className="icon close"
            onClick={() => hanldeDelete(element._id)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </td>
      </tr>
    </>
  );
};

export default RowCart;
