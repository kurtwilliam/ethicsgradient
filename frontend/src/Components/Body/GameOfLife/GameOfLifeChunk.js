import React from "react";
import GameOfLifeChunkLayout from "./GameOfLifeChunkLayout";
// import ChunkDesc from "../../shared/ChunkDesc";
import { Link } from "react-router-dom";
import GolThumb from "./assets/GolThumb.png";

const GameOfLifeChunk = () => (
  <GameOfLifeChunkLayout>
    <Link to="/bc" target="_blank" rel="noopener noreferrer"></Link>
    <img src={GolThumb} alt="Game of Life" />
    <span>
      Cellular Automaton based off of John Conway's Game of Life ● Bacterial
      Colony
    </span>
  </GameOfLifeChunkLayout>
);

export default GameOfLifeChunk;
