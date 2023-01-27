import { Button } from "./Button";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";
const Footer = () => {
  /*
    Put in alpha logo *
    contact us button *
    link to other pages *
    socials *
    phone number
    email
    */
  return (
    <div className="footer">
      <div className="section-1">
        <div>logo here</div>
        <Button buttonStyle="btn--outline--secondary">CONTACT US</Button>
      </div>
      <ul className="section-2">
        <li>Home</li>
        <li>Gallery</li>
        <li>Rentals</li>
      </ul>
      <div className="section-3">
        <div className="follow-us">Follow Us</div>
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="section-4">
        <div>Call Us</div>
        <div>214 228 4612</div>
        <br />
        <div>Email Us</div>
        <div>alphadecordallas@gmail</div>
      </div>
    </div>
  );
};

export default Footer;
