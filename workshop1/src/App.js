import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./views/authentication/Signin";
import Signup from "./views/authentication/Signup";
import Fulllayout from "./layouts/fulllaouts";

class App extends React.Component {
  render() {
    return <Fulllayout />;
  }
}
export default App;
