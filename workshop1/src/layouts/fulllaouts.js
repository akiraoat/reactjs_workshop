import React from "react";
import Sidebar from "./layout-components/sidebar";
import Navbar from "./layout-components/navbar";
import Footer from "./layout-components/footer";

class Fulllayout extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Fulllayout;
