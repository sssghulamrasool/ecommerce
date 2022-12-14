import React from "react";
import { useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    stock_quantity: "",
    productImages: "",
    feature: "Yes",
    short_description: "",
    description: "",
    category: "Shoes",
  });
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

    if (addProduct.productImages.length < 1) {
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
    } else {
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
      fetch("http://localhost:9090/addProduct", {
        method: "post",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
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
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="AddProduct">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>AddProduct</h2>
          </div>
        </div>
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

export default AddProduct;
