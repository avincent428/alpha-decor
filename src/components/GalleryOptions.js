import React from "react";
import { Link } from "react-router-dom";
import "./GalleryOptions.css";

const GalleryOptions = () => {
  return (
    <div className="gallery-options">
      <Link to="/gallery/centerpieces" className="link-styling">
        <div className="grid-item centerpieces"> Centerpieces </div>
      </Link>
      <Link to="/gallery/stage-decor">
        <div className="grid-item"> Stage Decor </div>
      </Link>
      <Link to="/gallery/reception-decor">
        <div className="grid-item"> Reception Decor </div>
      </Link>
      <Link to="/gallery/ceremony">
        <div className="grid-item"> Ceremonies </div>
      </Link>
      <Link to="/gallery/bouqets">
        <div className="grid-item"> Bouquets </div>
      </Link>
      <Link to="/gallery/head-tables">
        <div className="grid-item"> Head Tables </div>
      </Link>
      <Link to="/gallery/cake-tables">
        <div className="grid-item"> Cake Tables </div>
      </Link>
    </div>
  );
};

export default GalleryOptions;
