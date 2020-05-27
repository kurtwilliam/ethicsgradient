import React, { Component } from "react";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ".PingFang SC";
    font-weight: 500;
    src: local(".PingFang-SC-Medium");
  }

  @font-face {
    font-family: ".PingFang SC";
    font-weight: 400;
    src: local(".PingFang-SC-Regular");
  }

  @font-face {
    font-family: ".PingFang SC";
    font-weight: 300;
    src: local(".PingFang-SC-Light");
  }
  * {
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-family: '.PingFang SC', Heiti, -apple-system, BlinkMacSystemFont, sans-serif;
  }
  html {
    font-size:62.5%;
  }
  body {
    background:rgb(238,238,238);
    color:black;
    font-size:1.6rem;
  }
`;

const theme = {
  golBrown: "rgb(77,33,27)",
  golTan: "rgb(151,138,88)",
  golOffWhite: "rgb(210,210,206)",
  golOffWhiteDark: "rgb(133, 133, 128);",
  golOffWhiteDarker: "rgb(120, 120, 115);",
  golBorderWidth: 2.5,
  golHighlight: "maroon",
  golGrey: "rgb(143, 142, 152)",
  golPrimary1: "#22A657",
  golPrimary2: "#D3FBC5",
  golPrimary3: "#0E6D34",
  golButtonColor: "#363834",
  golTextColor: "#1C1919",
  golGrey1: "#959695",
  golCream: "#C4C4C4",
  golWhite: "white",
  golBlack: "black",
  golHoleColor1: "#ECEBE9",
  golHoleColor2: "#DEDDDB"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Body />
          <Footer />
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

// Essentially
// Header: On load, render a random
// header based off of the numbers of headers there are

// Body: subscribe to current state of chunk id, list of
// all ids for chunks, and list of all loaded id's
// on load, load random number of body chunks, up to five
// add event listener for scroll to top of component
// if the current id is within the last 2 of loaded chunks
// load a new chunk, so long as the loaded chunk id
// doesnt correlate with a previously loaded chunk

// Footer: always same footer
