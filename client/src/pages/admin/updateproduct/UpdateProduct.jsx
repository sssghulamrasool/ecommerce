import React from "react";
import "./UpdateProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const UpdateProduct = () => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    stock_quantity: "",
    productImages: [],
    feature: "",
    short_description: "",
    description: "",
    category: "",
  });
  const [images, setimages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const UpdateProduct = () => {
    fetch(`http://localhost:9090/upateProduct/${id}`, {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setimages(data.productdata.productImages);
        setAddProduct({
          name: data.productdata.name,
          price: data.productdata.price,
          stock_quantity: data.productdata.stock_quantity,
          feature: data.productdata.feature,
          short_description: data.productdata.short_description,
          description: data.productdata.description,
          category: data.productdata.category,
        });
      });
  };
  useEffect(() => {
    UpdateProduct();
  }, []);
  const hanldeOnChange = (e) => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };
  const hanldeOnChangeImage = (e) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]: e.target.files,
    });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (!addProduct.productImages < 1) {
      const formData = new FormData();
      formData.append("name", addProduct.name);
      formData.append("price", addProduct.price);
      formData.append("stock_quantity", addProduct.stock_quantity);
      formData.append("short_description", addProduct.short_description);
      formData.append("description", addProduct.description);
      formData.append("feature", addProduct.feature);
      formData.append("category", addProduct.category);

      for (const img of addProduct.productImages) {
        formData.append("productImages", img);
      }

      fetch(`http://localhost:9090/upateProduct/${id}`, {
        method: "PUT",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/");
          toast.success("Product Upload SuccessFully ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setAddProduct({
            name: "",
            price: "",
            stock_quantity: "",
            feature: "Yes",
            short_description: "",
            description: "",
            category: "Shoes",
          });
        });
    } else {
      toast.error("Please Image Upload Must", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <section className="UpdateProduct">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <form onSubmit={hanldeSubmit}>
              <div className="mb-3">
                <label className="form-label">name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="name"
                  name="name"
                  value={addProduct.name}
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  name="price"
                  value={addProduct.price}
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">stock quantity</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="stock quantity"
                  name="stock_quantity"
                  value={addProduct.stock_quantity}
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Images</label>
                <input
                  type="file"
                  multiple
                  className="form-control"
                  name="productImages"
                  onChange={hanldeOnChangeImage}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Old Images</label>
                <div className="wrapper--images">
                  {images?.map((element, i) => {
                    return (
                      <div className="item--item" key={i}>
                        <img
                          src={`http://localhost:9090/${element}`}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">feature</label>
                <select
                  name="feature"
                  value={addProduct.feature}
                  onChange={hanldeOnChange}
                  className="form-control"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  value={addProduct.category}
                  onChange={hanldeOnChange}
                  className="form-control"
                >
                  <option value="Shoes">Shoes</option>
                  <option value="Book">Book</option>
                  <option value="Flower">Flower</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">short description</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="short description"
                  name="short_description"
                  value={addProduct.short_description}
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">description</label>
                <textarea
                  type="text"
                  id="description"
                  className="form-control"
                  placeholder="description"
                  name="description"
                  value={addProduct.description}
                  onChange={hanldeOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="add product"
                  className="custom-btn"
                />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProduct;
