import React from "react";
// import HeroSlider from "../../../components/client/HeroSlider/HeroSlider";
import { useSelector } from "react-redux";
import "./Home.css";
import Products from "../../../components/client/Products/Products";
import HomeCategories from "../../../components/client/HomeCategories/HomeCategories";
import Feature from "../../../components/client/Feature/Feature";
import HeroSlider from "../../../components/client/Slider/HeroSlider";
import ClientMainWraper from "../../../components/client/HOC";
const HomeClient = () => {
  const state = useSelector((state) => state.Reduder);
  return (
    <section className="home">
      {/* sdajfkdsjafkjdkfajsdf */}
      <HeroSlider />
        <Feature featureProducts={state.featureProducts} />
        <HomeCategories />
        <Products product={state.allProduct} />
    </section>
  );
};

export default HomeClient;
