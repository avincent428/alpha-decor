import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryImages.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const GalleryImages = ({ category }) => {
  let imgData = [
    {
      id: 1,
      category: "centerpiece",
      imgSrc: "/images/img-1.jpg",
      alt: "this is the first image",
    },
    {
      id: 2,
      imgSrc: "/images/img-2.jpg",
      category: "reception-decor",
      alt: "this is the second image",
    },
    {
      id: 3,
      imgSrc: "/images/img-3.jpg",
      category: "centerpiece",
      alt: "this is the third image",
    },
    {
      id: 4,
      imgSrc: "/images/img-4.jpg",
      category: "centerpiece",
      alt: "this is the fourth image",
    },
    {
      id: 5,
      imgSrc: "/images/img-5.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 6,
      imgSrc: "/images/img-6.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 7,
      imgSrc: "/images/img-7.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 8,
      imgSrc: "/images/img-8.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 9,
      imgSrc: "/images/img-9.jpg",
      category: "centerpiece",
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
      <Link to="/gallery">
        <div className="back-button">
          <ArrowBackIosNewIcon />
        </div>
      </Link>

      <div className={modal ? " modal open" : "modal"}>
        <img src={tempImgSrc} alt="modal pop-up" />
        <CloseIcon onClick={() => setModal(false)} />
      </div>
      <div className="gallery">
        {imgData.map((image, index) => {
          if (image.category == category) {
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
          }
        })}
      </div>
    </>
  );
};

export default GalleryImages;
