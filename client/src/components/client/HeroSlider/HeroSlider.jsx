import React from "react";
import "./HeroSlider.css";
const HeroSlider = () => {
  return (
    <section className="HeroSlider">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8">
            <p className="some--tiltle">
              Your beard deserves moreb There is an incessant need for men to
              STOP killing their beards with chemically-processed supermarket
              beard oils and balms. Buying beard oils and balms at big
              supermarkets is like buying a gym membership at Planet Fitness. 
            </p>
            <button className="custom-btn "> explore more</button>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
