import React, { Component } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import InterLight from './assets/fonts/Inter-Light.woff';

import Home from "./Components/Routes/Home";
import GameOfLife from "./Components/Routes/GameOfLife";

const createdHistory = createBrowserHistory();

const theme = {
  golBrown: "rgb(77,33,27)",
  golTan: "rgb(151,138,88)",
  golOffWhite: "rgb(210,210,206)",
  golOffWhiteDark: "rgb(133, 133, 128);",
  golOffWhiteDarker: "rgb(120, 120, 115);",
  golBorderWidth: 2.5,
  golHighlight: "maroon",
  golGrey: "rgb(143, 142, 152)",
  golPrimary1: "#6095A6",
  golPrimary2: "#E3F98F",
  golPrimary3: "#364A55",
  golButtonColor: "#363834",
  golTextColor: "#1C1919",
  golGrey1: "#959695",
  golCream: "#C4C4C4",
  golWhite: "white",
  golBlack: "black",
  golBgBeige: "#F2F1EF",
  golHoleColor1: "#ECEBE9",
  golHoleColor2: "#DEDDDB",
  golBgColor: "#B7BDBA",

  greenBeige:"#E8EDDF",
  greenGrey:"#CFDBD5",
  greenSlate:"#333533",
  greenBlack:"#171709",
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    src: local("${InterLight}");
  }

  * {
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-family: 'Inter', Heiti, -apple-system, BlinkMacSystemFont, sans-serif;
    color:${theme.greenBlack};
  }
  html {
    font-size:62.5%;
  }
  body {
    background:${theme.greenBlack};
    color:black;
    font-size:1.6rem;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router history={createdHistory}>
            <Route exact path="/" component={Home} />
            <Route exact path="/bc" component={GameOfLife} />
          </Router>
          {/* <Body /> */}
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
