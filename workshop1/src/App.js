import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Blanklayout from "./layouts/blanklayout";
//import SignUp from "./views/authentication/signup";
import SignIn from "./views/authentication/signin"

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="authentication" component={Blanklayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
