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
    {
      id: 23,
      imgSrc: "/images/gallery/stage-decor/stage-decor-1.PNG",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 24,
      imgSrc: "/images/gallery/stage-decor/stage-decor-2.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 25,
      imgSrc: "/images/gallery/stage-decor/stage-decor-3.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 26,
      imgSrc: "/images/gallery/stage-decor/stage-decor-4.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 27,
      imgSrc: "/images/gallery/stage-decor/stage-decor-5.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 28,
      imgSrc: "/images/gallery/stage-decor/stage-decor-6.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 29,
      imgSrc: "/images/gallery/stage-decor/stage-decor-7.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 30,
      imgSrc: "/images/gallery/stage-decor/stage-decor-8.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 31,
      imgSrc: "/images/gallery/stage-decor/stage-decor-9.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 32,
      imgSrc: "/images/gallery/stage-decor/stage-decor-10.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 33,
      imgSrc: "/images/gallery/stage-decor/stage-decor-11.JPG",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 34,
      imgSrc: "/images/gallery/stage-decor/stage-decor-12.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 35,
      imgSrc: "/images/gallery/stage-decor/stage-decor-13.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 36,
      imgSrc: "/images/gallery/stage-decor/stage-decor-14.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 37,
      imgSrc: "/images/gallery/stage-decor/stage-decor-15.jpeg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 38,
      imgSrc: "/images/gallery/stage-decor/stage-decor-16.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 39,
      imgSrc: "/images/gallery/stage-decor/stage-decor-17.JPG",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 40,
      imgSrc: "/images/gallery/stage-decor/stage-decor-18.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 41,
      imgSrc: "/images/gallery/stage-decor/stage-decor-19.JPG",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 42,
      imgSrc: "/images/gallery/stage-decor/stage-decor-20.jpg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 43,
      imgSrc: "/images/gallery/stage-decor/stage-decor-21.jpeg",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 44,
      imgSrc: "/images/gallery/stage-decor/stage-decor-22.JPG",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 45,
      imgSrc: "/images/gallery/stage-decor/stage-decor-23.JPG",
      category: "stage-decor",
      alt: "this is the fifth image",
    },
    {
      id: 47,
      imgSrc: "/images/gallery/ceremonies/ceremonies-2.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 48,
      imgSrc: "/images/gallery/ceremonies/ceremonies-3.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 49,
      imgSrc: "/images/gallery/ceremonies/ceremonies-4.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 50,
      imgSrc: "/images/gallery/ceremonies/ceremonies-5.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 51,
      imgSrc: "/images/gallery/ceremonies/ceremonies-6.JPG",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 52,
      imgSrc: "/images/gallery/ceremonies/ceremonies-7.JPG",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 54,
      imgSrc: "/images/gallery/ceremonies/ceremonies-8.JPG",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 55,
      imgSrc: "/images/gallery/ceremonies/ceremonies-9.JPG",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 56,
      imgSrc: "/images/gallery/ceremonies/ceremonies-10.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 57,
      imgSrc: "/images/gallery/ceremonies/ceremonies-11.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 58,
      imgSrc: "/images/gallery/ceremonies/ceremonies-12.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 59,
      imgSrc: "/images/gallery/ceremonies/ceremonies-13.jpg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 60,
      imgSrc: "/images/gallery/ceremonies/ceremonies-14.jpeg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 61,
      imgSrc: "/images/gallery/ceremonies/ceremonies-15.jpeg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 62,
      imgSrc: "/images/gallery/ceremonies/ceremonies-16.JPG",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 63,
      imgSrc: "/images/gallery/ceremonies/ceremonies-17.jpeg",
      category: "ceremony",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-1.JPG",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 65,
      imgSrc: "/images/gallery/bouquets/bouquet-2.JPG",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/bouquets/bouquet-3.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 67,
      imgSrc: "/images/gallery/bouquets/bouquet-4.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 68,
      imgSrc: "/images/gallery/bouquets/bouquet-5.JPG",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 69,
      imgSrc: "/images/gallery/bouquets/bouquet-6.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 70,
      imgSrc: "/images/gallery/bouquets/bouquet-7.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 71,
      imgSrc: "/images/gallery/bouquets/bouquet-8.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 72,
      imgSrc: "/images/gallery/bouquets/bouquet-9.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-10.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-11.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-12.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-13.JPG",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-14.JPG",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-15.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-16.JPG",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-17.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 64,
      imgSrc: "/images/gallery/bouquets/bouquet-18.jpg",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 65,
      imgSrc: "/images/gallery/bouquets/bouquet-19.JPG",
      category: "bouquet",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-1.jpeg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 67,
      imgSrc: "/images/gallery/head-tables/head-table-2.jpg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-3.jpg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-4.jpg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-5.jpg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-6.jpg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-7.jpg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-8.JPG",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-9.JPG",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-10.jpeg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-11.jpeg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-12.JPG",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-13.JPG",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 66,
      imgSrc: "/images/gallery/head-tables/head-table-14.jpeg",
      category: "head-table",
      alt: "this is the fifth image",
    },
    {
      id: 67,
      imgSrc: "/images/gallery/cake-tables/cake-table-1.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 68,
      imgSrc: "/images/gallery/cake-tables/cake-table-2.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 69,
      imgSrc: "/images/gallery/cake-tables/cake-table-3.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 70,
      imgSrc: "/images/gallery/cake-tables/cake-table-4.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 71,
      imgSrc: "/images/gallery/cake-tables/cake-table-5.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 72,
      imgSrc: "/images/gallery/cake-tables/cake-table-6.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 73,
      imgSrc: "/images/gallery/cake-tables/cake-table-7.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 74,
      imgSrc: "/images/gallery/cake-tables/cake-table-8.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 75,
      imgSrc: "/images/gallery/cake-tables/cake-table-9.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 76,
      imgSrc: "/images/gallery/cake-tables/cake-table-10.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 77,
      imgSrc: "/images/gallery/cake-tables/cake-table-11.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 78,
      imgSrc: "/images/gallery/cake-tables/cake-table-12.JPG",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 79,
      imgSrc: "/images/gallery/cake-tables/cake-table-13.jpg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 80,
      imgSrc: "/images/gallery/cake-tables/cake-table-14.jpeg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 81,
      imgSrc: "/images/gallery/cake-tables/cake-table-15.jpeg",
      category: "cake-table",
      alt: "this is the fifth image",
    },
    {
      id: 82,
      imgSrc: "/images/gallery/reception-decor/reception-1.jpg",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 83,
      imgSrc: "/images/gallery/reception-decor/reception-2.jpg",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 84,
      imgSrc: "/images/gallery/reception-decor/reception-3.JPG",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 85,
      imgSrc: "/images/gallery/reception-decor/reception-4.jpeg",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 86,
      imgSrc: "/images/gallery/reception-decor/reception-5.jpg",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 87,
      imgSrc: "/images/gallery/reception-decor/reception-6.JPG",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 88,
      imgSrc: "/images/gallery/reception-decor/reception-7.jpg",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 89,
      imgSrc: "/images/gallery/reception-decor/reception-8.JPG",
      category: "reception-decor",
      alt: "this is the fifth image",
    },
    {
      id: 90,
      imgSrc: "/images/gallery/reception-decor/reception-9.jpg",
      category: "reception-decor",
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
