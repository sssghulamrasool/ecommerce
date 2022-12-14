import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper";
// import "./slider.css";
import "./HeroSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import shoes from "../assets/images/shoes.jpg";
import { Mousewheel, Pagination, EffectFade, Navigation } from "swiper";
const HeroSlider = () => {
  return (
    <>
      <div className="fade_role">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="first_img">
            <div className="upper_content">
              <div className="container-fluid">
                <div className="row justify-content-end align-items-center content2">
                  <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="content ">
                      <h2 className=" heading">
                        All Electronic <br /> Gadgets
                      </h2>

                      <div className="off ">
                        <p>Get Save 35% - 55 % OFF On This Week</p>
                      </div>
                      <button className="shop_buton">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="first_img2">
            <div className="upper_content">
              <div className="container-fluid">
                <div className="row justify-content-start align-items-center content2">
                  <div className="col-lg-6 xol-md-12 col-sm-12">
                    <div className="content ">
                      <h2 className=" heading">
                        All Electronic <br /> Gadgets
                      </h2>

                      <div className="off ">
                        <p>Get Save 35% - 55 % OFF On This Week</p>
                        <button className="shop_buton">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="first_img3">
            <div className="upper_content">
              <div className="container-fluid">
                <div className="row justify-content-end align-items-center content2">
                  <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="content ">
                      <h2 className=" heading">
                        Huawei Mate 30 <br /> Pro
                      </h2>

                      <div className="off ">
                        <p>Get Save 35% - 55 % OFF On This Week</p>
                        <button className="shop_buton">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
