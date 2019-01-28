import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
// import Burger from "../Burger";
// import Popup from "../Popup"
import Logo from "../NavBar/logo.jpg"
// import { relative } from "path";


const navStyle = {
  textAlign: "center",
  position: "relative"
}

const logoStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover"
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav style= {{navStyle}}className="navbar navbar-expand-lg navbar-light bg-light"  >
  <img src={Logo} style={{logoStyle}}/>
    </nav>
  );
}

export default Navbar;
