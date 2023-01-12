import React from "react";
import { Link } from "react-router-dom";
import "./GalleryOptions.css";

const GalleryOptions = () => {
  return (
    <div>
      <div className="gallery-options">
        <Link to="/gallery/centerpieces" className="link-styling">
          <div className="grid-item centerpieces">Centerpieces</div>
        </Link>
        <Link to="/gallery/stage-decor" className="link-styling">
          <div className="grid-item stage-decor"> Stage Decor </div>
        </Link>
        <Link to="/gallery/reception-decor" className="link-styling">
          <div className="grid-item reception-decor"> Reception Decor </div>
        </Link>
        <Link to="/gallery/ceremony" className="link-styling">
          <div className="grid-item ceremonies"> Ceremonies </div>
        </Link>
        <Link to="/gallery/bouquets" className="link-styling">
          <div className="grid-item bouquets"> Bouquets </div>
        </Link>
        <Link to="/gallery/head-tables" className="link-styling">
          <div className="grid-item head-tables"> Head Tables </div>
        </Link>
        <Link
          to="/gallery/cake-tables"
          className="link-styling cake-tables-container"
        >
          <div className="grid-item cake-tables"> Cake Tables </div>
        </Link>
      </div>
    </div>
  );
};

export default GalleryOptions;
