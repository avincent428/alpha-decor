import userEvent from "@testing-library/user-event";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./GalleryImages.css";

const GalleryImages = () => {
  let imgData = [
    {
      id: 1,
      imgSrc: "/images/img-1.jpg",
      alt: "this is the first image",
    },
    {
      id: 2,
      imgSrc: "/images/img-2.jpg",
      alt: "this is the second image",
    },
    {
      id: 3,
      imgSrc: "/images/img-3.jpg",
      alt: "this is the third image",
    },
    {
      id: 4,
      imgSrc: "/images/img-4.jpg",
      alt: "this is the fourth image",
    },
    {
      id: 5,
      imgSrc: "/images/img-5.jpg",
      alt: "this is the fifth image",
    },
  ];

  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div className={modal ? " modal open" : "modal"}>
        <img src={tempImgSrc} />
      </div>
      <div className="gallery">
        {imgData.map((image, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(image.imgSrc)}
            >
              <img
                src={image.imgSrc}
                alt={image.alt}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryImages;
