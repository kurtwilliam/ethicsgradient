import React from 'react';
import { useDrag } from 'react-dnd';
import styled from "styled-components";

const Drag = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  min-width:20vw;
  min-height:20vh;
  img {
    width: ${props => props.width}px;
  }
`;

export const DragChunk = ({ id, left, top, width, src, children, name }) => {
  const [{ isDragging }, drag] = useDrag({
      item: { id, left, top, type: 'box' },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      }),
  });
  if (isDragging) {
      return <div ref={drag}/>;
  }
  return (<Drag ref={drag} top={top} left={left} width={width}>
    <img src={src} alt={name} />
  </Drag>);
};

export default DragChunk;