import React from "react";
import { Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import HomePage from "../pages/homepage/hompage.component";
import About from "../pages/about/about.component";
import Store from "../pages/store/store.component";
import Contact from "../pages/contact/contact.component";
// import Scroll from "../components/Scroll";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="tc">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/store" component={Store} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
