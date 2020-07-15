import React, { Component } from "react";
import Chunk from "../shared/Chunk";

import GameOfLife from "./GameOfLife";
import GameOfLifeChunk from "./GameOfLife/GameOfLifeChunk";

// Map over body chunks we get from state
// from here we render a body piece
// in the body piece we render the type of body it is

class BodyContainer extends Component {
  render() {
    return (
      <Chunk>
        <GameOfLifeChunk />
      </Chunk>
    );
  }
}

export default BodyContainer;
