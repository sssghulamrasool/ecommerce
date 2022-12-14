import React from "react";
import { useState } from "react";

const ImageGallaryBox = ({ gallary }) => {
  const [profileImg, setProfileImg] = useState(gallary[0]);

  const hanldeChnage = (img) => {
    setProfileImg(img);
  };
  return (
    <>
      <div className="image-thumnail">
        <img
          src={`http://localhost:9090/${profileImg}`}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="image--gallary">
        {gallary.map((img, i) => {
          return (
            <div
              className={
                img == profileImg
                  ? "img-gallay--wrap active"
                  : "img-gallay--wrap"
              }
              key={i}
              onClick={() => hanldeChnage(img)}
            >
              <img
                src={"http://localhost:9090/" + img}
                alt=""
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallaryBox;
