import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductList.css";
import Moment from "moment";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { allProduct } = useSelector((state) => state.Reduder);
  const [listOfProduct, setListOfProduct] = useState([]);
  const [loading, setloading] = useState(true);

  const DELETEPRODUCT = (id) => {
    fetch(`http://localhost:9090/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // GETALLPRODUCT();
      });
  };
  // const GETALLPRODUCT = async () => {
  //   fetch("http://localhost:9090/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setListOfProduct(data.productdata);
  //       setloading(false);
  //     });
  // };
  // useEffect(() => {
  //   GETALLPRODUCT();
  // }, []);
  return (
    <section className="admin--productlist">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h3>Produst</h3>
          </div>
          <div className="col-lg-6"></div>
        </div>
        <div className="row">
          <div className="col-12 product--list--table">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <i className="fa-solid fa-image"></i>
                  </th>
                  <th>Name</th>
                  <th>stock</th>
                  <th>price</th>
                  <th>category</th>
                  <th>date</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {/* {loading ? (
                  <tr>
                    <td colSpan={7}>data is loading</td>
                  </tr>
                ) : (
                  allProduct?.map((element) => {
                    return (
                      <tr key={element._id}>
                        <td>
                          <img
                            src={`http://localhost:9090/${element.productImages[0]}`}
                            alt=""
                            className="img-fluid"
                          />
                        </td>
                        <td>{element.name}</td>
                        <td>{element.stock_quantity}</td>
                        <td>{element.price}</td>
                        <td>{element.category}</td>
                        <td>
                          {Moment(element.dateCreated).format("DD/MM/YYYY")}
                        </td>
                        <td>
                          <Link to={`/admin/update-product/${element._id}`}>
                            <button className="ctm--btn">Eidt</button>
                          </Link>
                          <button
                            className="ctm--btn productlist--delete--btn"
                            onClick={() => {
                              DELETEPRODUCT(element._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )} */}

                {allProduct.length > 0 ? (
                  allProduct?.map((element) => {
                    return (
                      <tr key={element._id}>
                        <td>
                          <img
                            src={`http://localhost:9090/${element.productImages[0]}`}
                            alt=""
                            className="img-fluid"
                          />
                        </td>
                        <td>{element.name}</td>
                        <td>{element.stock_quantity}</td>
                        <td>{element.price}</td>
                        <td>{element.category}</td>
                        <td>
                          {Moment(element.dateCreated).format("DD/MM/YYYY")}
                        </td>
                        <td>
                          <Link to={`/admin/update-product/${element._id}`}>
                            <button className="ctm--btn">Eidt</button>
                          </Link>
                          <button
                            className="ctm--btn productlist--delete--btn"
                            onClick={() => {
                              DELETEPRODUCT(element._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}> No Record Existed</td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <th>ℹ</th>
                  <th>Name</th>
                  <th>stock</th>
                  <th>price</th>
                  <th>category</th>
                  <th>date</th>
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

export default ProductList;
