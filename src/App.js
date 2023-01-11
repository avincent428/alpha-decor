import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import GalleryImages from "./components/GalleryImages";
import InfoBar from "./components/InfoBar";

//TODO
// 1. Rental System breakdown
// 2. Testimonials
// 3. Contact Page/Form
// 4. Make Mobile-Friendly
// 5. Add images to Gallery
// 6. Footer
function App() {
  return (
    <>
      <Router>
        <InfoBar />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route
            path="/gallery/centerpieces"
            exact
            element={<GalleryImages category="centerpiece" />}
          />
          <Route
            path="/gallery/bouqets"
            exact
            element={<GalleryImages category="bouqet" />}
          />
          <Route
            path="/gallery/reception-decor"
            exact
            element={<GalleryImages category="reception-decor" />}
          />
          <Route
            path="/gallery/stage-decor"
            exact
            element={<GalleryImages category="stage-decor" />}
          />
          <Route
            path="/gallery/head-tables"
            exact
            element={<GalleryImages category="head-table" />}
          />
          <Route
            path="/gallery/ceremony"
            exact
            element={<GalleryImages category="ceremony" />}
          />
          <Route
            path="/gallery/cake-tables"
            exact
            element={<GalleryImages category="cake-table" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
