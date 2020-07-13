import React, { Component, useEffect } from "react";

import PhoneBacteriaStarTop from "../assets/PhoneBacteriaStarTop";
import PhoneBacterias from "../assets/PhoneBacterias";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vw;
  background: ${(p) => p.theme.golBgBeige};
  padding: 16px;
  .topText {
    width: 100%;
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;

    p {
      font-weight: bold;
      color: ${(p) => p.theme.golPrimary3};
    }
    span {
      margin-top: 16px;
      color: ${(p) => p.theme.golTextColor};
    }
  }

  .emailButton {
  }

  .bacteria__top {
    position: absolute;
    top: -80%;
    right: -50%;
  }

  .bacteria__bottom {
    bottom: -30%;
    right: -50%;
  }

  .emailButton {
    border-radius: 8px;
    text-transform: uppercase;
    width: 100%;
    background: ${(p) => p.theme.golPrimary3};
    color: ${(p) => p.theme.golWhite};
    font-weight: bold;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    border: none;
    outline: none;
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

        <PhoneBacteriaStarTop className={"bacteria__top"} />
        <PhoneBacterias className={"bacteria__bottom"} />
      </Container>
    );
  }
}

export default GameOfLifeSettings;
