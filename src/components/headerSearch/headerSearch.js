import React, { useState } from "react";
import Nav from "../nav/nav";
import "./headerSearch.scss";
import Search from "../search/search";
import { Link } from "react-router-dom";

const HeaderSearch = () => {
  const [search, setSearch] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (search === false) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  return (
    <header className="container-headerSearch">
      <div className="container-headerSearch__logo">
        <Link to="/">
          <img
            className="container-headerSearch__logo--img"
            src={process.env.PUBLIC_URL + "/images/Spotify_Logo_RGB_White.png"}
            alt="logo"
          ></img>
        </Link>
        <Nav className="container-headerSearch__nav" onClick={handleClick} />
      </div>
      {search === true && (
        <div className="container-headerSearch__input">
          <Search />
        </div>
      )}
    </header>
  );
};

export default HeaderSearch;
