import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
// import Burger from "../Burger";
// import Popup from "../Popup"
import Logo from "../NavBar/croppedlogo.jpg"
// import { relative } from "path";


const navStyle = {
  textAlign: "center",
  position: "relative",
  
  backgroundColor: "lightgrey"
}

const logoStyle = {
  textAlign: "center",
  display: "inline-block",
  verticalAlign: "middle"
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav style={navStyle} className="navbar navbar-expand-lg navbar-light"  >
  <img class="logo" src={Logo} style={logoStyle}/>
  <span></span>
    </nav>
  );
}

export default Navbar;
