import React from "react";
import { FaSearch } from "react-icons/fa";
import "./nav.scss";

const Nav = ({ onClick }) => (
  <nav className="container-nav">
    <button className="container-nav__button" onClick={onClick}>
      <FaSearch />
    </button>
  </nav>
);

export default Nav;
