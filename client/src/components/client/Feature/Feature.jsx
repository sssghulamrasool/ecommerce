import React from "react";
import "./Feature.css";
import FeatureSlider from "./FeatureSlider/FeatureSlider";
const Feature = ({ featureProducts }) => {
  return (
    <section className="Feature">
      <div className="container-xxl">
        <div className="row">
          <div className="col">
            <h3 className="title--for--all">Feature products</h3>
          </div>
        </div>
        <div className="row feature--products">
          <div className="col p-0">
            <FeatureSlider featureProducts={featureProducts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
