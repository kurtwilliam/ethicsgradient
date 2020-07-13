import styled from "styled-components";

const GameOfLifeBackgroundLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${(p) => p.theme.golBgBeige};
  // overflow: hidden;
`;

export default GameOfLifeBackgroundLayout;
