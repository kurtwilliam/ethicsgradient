import React from "react";
import Chunk from "../../shared/Chunk";
import JungleScene from "./JungleScene";
import styled from "styled-components";

import Koala from "../../../assets/jungleSearch/koala.jpg";

const scenes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const randomNumber = (max, min) => Math.random() * (max - min) + min;

const JungleChunk = styled(Chunk)`
  overflow: hidden;
  background-image: url(${Koala});
  background-positon: center;
`;

const JungleSearch = () => (
  <JungleChunk>
    {scenes.map(i => {
      // Randomly generate x/y position for jungle box
      let x = randomNumber(60, 0);
      let y = randomNumber(60, 0);

      // Randomly generate width/height for jungle box
      let w = randomNumber(100, 40);
      let h = randomNumber(100, 60);

      // Ensures top left is at least covered
      if (i < 3) {
        x = randomNumber(10, 0);
        y = randomNumber(10, 0);
        w = randomNumber(80, 50);
        h = randomNumber(80, 50);
      }
      return <JungleScene key={i} x={x} y={y} w={w} h={h} />;
    })}
  </JungleChunk>
);

export default JungleSearch;
