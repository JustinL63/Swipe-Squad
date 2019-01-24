import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./Pages/chat";
import About from "./Pages/about";
import Home from "./Pages/home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;