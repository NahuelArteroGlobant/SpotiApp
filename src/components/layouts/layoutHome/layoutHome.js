import React from "react";
import "./layoutHome.scss";

import Header from "../../header/header";

function LayoutHome(props) {
  return (
    <div className="container-layoutHome">
      <Header />
      {props.children}
    </div>
  );
}
export default LayoutHome;
