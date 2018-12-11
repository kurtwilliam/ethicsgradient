import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const JungleBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 20%;
  min-width: 20%;
  border: 1px solid red;
  background: green;
`;

const JungleScene = ({ x, y, w, h }) => (
  <Draggable>
    <JungleBox
      style={{ width: `${w}%`, height: `${h}%`, left: `${x}%`, top: `${y}%` }}
    />
  </Draggable>
);

export default JungleScene;
