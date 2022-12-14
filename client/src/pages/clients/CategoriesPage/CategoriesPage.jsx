import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import PageTitle from "../../../components/client/PageTitle/PageTitle";
import "./CategoriesPage.css";
const CategoriesPage = () => {
  const { category } = useParams();
  const { allProduct } = useSelector((state) => state.Reduder);

  const categoryData = allProduct.filter(
    (elemet) => elemet.category === category
  );
  return (
    <section className="categories--page">
      <PageTitle title={category} />
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <div className="title--for--all">{category}</div>
          </div>
        </div>
        <div className="row sss--category">
          <div className="col">
            <div className="sss--categories--wrapper">
              {categoryData.map((element) => {
                return (
                  <div
                    className="categories--page--product--item"
                    key={element._id}
                  >
                    <div className="categories--page--product--image">
                      <img
                        src={`http://localhost:9090/${element.productImages[0]}`}
                        className="img-fluid"
                      />
                      {element.feature && (
                        <div className="new--product">
                          <i className="fa-solid fa-crown"></i>
                        </div>
                      )}
                    </div>
                    <div className="categories--page--product--detail">
                      <h5 className="category">
                        {" "}
                        Category :{" "}
                        <span className={`${element.category}`}>
                          {element.category}
                        </span>
                      </h5>
                      <h4>{element.name}</h4>
                      <p className="price">
                        RS : <span>{element.price} </span>
                      </p>

                      <div className="categories--page--product--extra">
                        <Link
                          className="add--to--cart--link"
                          to={`/single-product/${element._id}`}
                        >
                          <span className="add--to--cart--icon">
                            <i className="fa-solid fa-basket-shopping"></i>
                          </span>
                          view more
                        </Link>
                        <span className="view--product--details">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
