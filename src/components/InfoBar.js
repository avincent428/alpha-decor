import React from "react";
import "./InfoBar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="phone-nbr">Phone Number: (214) 228-4612</div>
      <div className="email">Email: alphadecordallas@gmail.com</div>
      <div className="social-container">
        <a
          href="https://www.facebook.com/alphadecorusa"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIcon className="fb-icon" />
        </a>
        <a
          href="https://www.instagram.com/alphadecordallas/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon className="ig-icon" />
        </a>
        <a
          href="https://twitter.com/alphadecordfw"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon className="twitter-icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
