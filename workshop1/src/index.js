import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import "./assets/Style/customStyle.css";
//import "./assets/main/fontawesome-free/css/all.min.css";

import "./assets/css/bootstrap.css";
import "./assets/css/bootstrap-theme.css";
//import "./assets/main/css/sb-admin-2.min.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
