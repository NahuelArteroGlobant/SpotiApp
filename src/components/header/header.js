import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container-header">
      <Link to="/">
        <img
          className="container-header__logo"
          src={process.env.PUBLIC_URL + "/images/Spotify_Logo_RGB_White.png"}
          alt="logo"
        ></img>
      </Link>
    </header>
  );
}

export default Header;
