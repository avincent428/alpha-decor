import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import GalleryImages from "./components/GalleryImages";
import InfoBar from "./components/InfoBar";
import Footer from "./components/Footer";

//TODO
// 1. Contact Page/Form
// 2. Make Mobile-Friendly
// 3. Footer
// 4. Rental System Implementation
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
            path="/gallery/bouquets"
            exact
            element={<GalleryImages category="bouquet" />}
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
