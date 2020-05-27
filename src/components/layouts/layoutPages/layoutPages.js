import React from "react";
import "./layoutPages.scss";

import HeaderSearch from "../../headerSearch/headerSearch";

function LayoutPages(props) {
  return (
    <div className="container-layoutPages">
      <HeaderSearch />
      {props.children}
    </div>
  );
}
export default LayoutPages;
