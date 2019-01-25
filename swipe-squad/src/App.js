import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./Pages/chat";
import About from "./Pages/about";
import Home from "./Pages/home";
import Popup from "reactjs-popup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Burger from "./components/Burger";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};

const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "80%",
  border: "none"
};

const Menu = () => (
  <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  </div>
);

function App() {
  return (
    <Router>
      <div>
<NavBar />

        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
        </Wrapper>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
