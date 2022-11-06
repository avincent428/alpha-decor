import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryOptions.css";

const GalleryOptions = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="gallery-options">
      <Link to="/gallery/centerpieces" className="link-styling">
        <div className="grid-item centerpieces" onClick={handleClick}>
          Centerpieces
        </div>
      </Link>
      <Link to="/gallery/stage-decor" className="link-styling">
        <div className="grid-item stage-decor"> Stage Decor </div>
      </Link>
      <Link to="/gallery/reception-decor" className="link-styling">
        <div className="grid-item"> Reception Decor </div>
      </Link>
      <Link to="/gallery/ceremony" className="link-styling">
        <div className="grid-item"> Ceremonies </div>
      </Link>
      <Link to="/gallery/bouqets" className="link-styling">
        <div className="grid-item"> Bouquets </div>
      </Link>
      <Link to="/gallery/head-tables" className="link-styling">
        <div className="grid-item"> Head Tables </div>
      </Link>
      <Link to="/gallery/cake-tables" className="link-styling">
        <div className="grid-item"> Cake Tables </div>
      </Link>
    </div>
  );
};

export default GalleryOptions;
