import React, { Component } from "react";
import BodyContainer from "./BodyContainer";
import Footer from "../Footer";

class Body extends Component {
  render() {
    return (
      <>
        <BodyContainer></BodyContainer>
        <Footer />
      </>
    );
  }
}

export default Body;
