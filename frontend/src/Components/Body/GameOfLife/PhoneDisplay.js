import React, { Component, useEffect } from "react";

import PhoneBacteriaStarTop from "./assets/PhoneBacteriaStarTop";
import PhoneBacterias from "./assets/PhoneBacterias";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.golBgBeige};
  padding: 16px;
  .topText {
    width: calc(100% - 32px);
    position: absolute;
    top: 12%;
    left: 16px;
    right: 0;
    z-index: 1000;

    p {
      font-weight: bold;
      color: ${p => p.theme.golPrimary3};
      font-size: 20px;
    }
    span {
      margin-top: 16px;
      display: inline-block;
      color: ${p => p.theme.golTextColor};
    }
  }

  svg {
    position: absolute;

    &:first-of-type {
      top: -51%;
      right: -5%;
    }

    &:last-of-type {
      bottom: -25%;
      right: -60%;
    }
  }

  .emailButton {
    border-radius: 8px;
    text-transform: uppercase;
    width: calc(100% - 32px);
    background: ${p => p.theme.golPrimary3};
    color: ${p => p.theme.golWhite};
    font-weight: bold;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1000;
    border: none;
    outline: none;
    padding: 16px;
  }
`;

class GameOfLifeSettings extends Component {
  render() {
    return (
      <Container>
        <div className={"topText"}>
          <p>
            Bacterial Colony is a <br />
            desktop only experience.
          </p>
          <span>
            If you were viewing this on your computer
            <br />
            oh boy would you be seeing some sweet stuff right now.
          </span>
          <span>
            ~ A cellular automaton (dancing math patterns) based off Conway’s
            Game of Life.
          </span>
          <span>~ Pixels whizzing all around.</span>
        </div>
        <button className={"emailButton"}>
          Email this to myself so I can open it on my desktop computer and spend
          a few moments having fun with math.{" "}
        </button>

        <PhoneBacteriaStarTop />
        <PhoneBacterias />
      </Container>
    );
  }
}

export default GameOfLifeSettings;
