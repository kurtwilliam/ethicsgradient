import styled from "styled-components";
import Chunk from "../../shared/Chunk";

const GameOfLifeChunkLayout = styled(Chunk)`
  position: relative;
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:0 8px;
  margin-top:16px;
  img {
    width:100%;
    height:auto;
    margin-bottom:16px;
  }

  span {
    color: black;
    font-size: 2rem;
  }

  a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export default GameOfLifeChunkLayout;
