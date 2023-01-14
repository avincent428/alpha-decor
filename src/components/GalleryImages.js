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
      imgSrc: "/images/gallery/centerpieces/centerpiece-1.JPG",
      alt: "this is the first image",
    },
    {
      id: 2,
      imgSrc: "/images/gallery/centerpieces/centerpiece-2.JPG",
      category: "centerpiece",
    },
    {
      id: 3,
      imgSrc: "/images/gallery/centerpieces/centerpiece-3.jpg",
      category: "centerpiece",
      alt: "this is the third image",
    },
    {
      id: 4,
      imgSrc: "/images/gallery/centerpieces/centerpiece-4.jpg",
      category: "centerpiece",
      alt: "this is the fourth image",
    },
    {
      id: 5,
      imgSrc: "/images/gallery/centerpieces/centerpiece-5.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 6,
      imgSrc: "/images/gallery/centerpieces/centerpiece-6.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 7,
      imgSrc: "/images/gallery/centerpieces/centerpiece-7.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 8,
      imgSrc: "/images/gallery/centerpieces/centerpiece-8.JPG",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 9,
      imgSrc: "/images/gallery/centerpieces/centerpiece-9.JPG",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 10,
      imgSrc: "/images/gallery/centerpieces/centerpiece-10.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 11,
      imgSrc: "/images/gallery/centerpieces/centerpiece-11.jpeg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 12,
      imgSrc: "/images/gallery/centerpieces/centerpiece-12.jpeg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 13,
      imgSrc: "/images/gallery/centerpieces/centerpiece-13.jpeg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 14,
      imgSrc: "/images/gallery/centerpieces/centerpiece-14.JPG",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 15,
      imgSrc: "/images/gallery/centerpieces/centerpiece-15.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 16,
      imgSrc: "/images/gallery/centerpieces/centerpiece-16.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 17,
      imgSrc: "/images/gallery/centerpieces/centerpiece-17.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 18,
      imgSrc: "/images/gallery/centerpieces/centerpiece-18.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 19,
      imgSrc: "/images/gallery/centerpieces/centerpiece-19.JPG",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 20,
      imgSrc: "/images/gallery/centerpieces/centerpiece-20.jpg",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 21,
      imgSrc: "/images/gallery/centerpieces/centerpiece-21.JPG",
      category: "centerpiece",
      alt: "this is the fifth image",
    },
    {
      id: 22,
      imgSrc: "/images/gallery/centerpieces/centerpiece-22.JPG",
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

      <div
        className={modal ? " modal open" : "modal"}
        onClick={() => setModal(false)}
      >
        <img src={tempImgSrc} alt="modal pop-up" />
        <CloseIcon />
      </div>
      <div className="gallery">
        {imgData.map((image, index) => {
          if (image.category === category) {
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
          } else {
            return console.error;
          }
        })}
      </div>
    </>
  );
};

export default GalleryImages;
