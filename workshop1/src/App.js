import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Signin from "./views/authentication/Signin";
//import Signup from "./views/authentication/Signup";
//import Fulllayout from "./layouts/fulllayouts";

import { HashRouter, Route, Switch } from "react-router-dom";
import Blanklayout from "./layouts/blanklayout";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="authenticate" Component={Blanklayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
