import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Burger from "../Burger";
import Popup from "../Popup"

// const navStyle = {
//   textAlign: 'center',
// }

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" img src= "./public/logo.jpg">
      <Link className="navbar-brand" to="/">
        Civitas
      </Link>
   
      modal
      {/* overlayStyle={{background: "white"}} */}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open}/>}
      >
      {close => <Popup close={close} />}
    
      
    </nav>
  );
}

export default Navbar;
