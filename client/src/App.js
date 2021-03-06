import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./Pages/chat";
import Test from "./Pages/test";
import About from "./Pages/about";
import Home from "./Pages/home";
import SignUp from "./Pages/signup";
import Create from "./components/Create";
import Login from "./Pages/login"
import Popup from "reactjs-popup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Burger from "./components/Burger";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "80%",
  border: "none"
};

const Menu = ({close}) => (

  <div className="menu">
  {/* <NavBar /> */}
    <ul>
      <li>
        <NavLink onClick={close} activeClassName='current' to='home'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName='current' to='about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName='current' to='chat'>
          Chat
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName='current' to='signup'>
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} activeClassName='current' to='login'>
          Log In
        </NavLink>
      </li>
    </ul>
  </div>
);

function App() {
  return (
  
    <Router>
      <div style={styles}>
     <NavBar />
        <Popup
          modal
          overlayStyle={{ background: "rgba(252, 181, 214)", width:"20%", float:"right", left: "none"}}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <Burger open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>
       
        <Wrapper>
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Test} />
        </Wrapper>
        <Footer />
        
        </div>
    </Router>


  );
}

export default App;