import React, { Component } from "react";
import Chunk from "../shared/Chunk";

import GameOfLifeChunk from "./GameOfLife/GameOfLifeChunk";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Map over body chunks we get from state
// from here we render a body piece
// in the body piece we render the type of body it is

const BodyContainer = () => (
  <DndProvider backend={HTML5Backend}>
    <Chunk>
      <GameOfLifeChunk />
    </Chunk>
  </DndProvider>
);

export default BodyContainer;
