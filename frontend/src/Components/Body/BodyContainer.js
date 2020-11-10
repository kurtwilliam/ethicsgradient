import React, { useState } from "react";
import update from "immutability-helper";
import { useDrop } from "react-dnd";
import GameOfLifeChunk from "./GameOfLife/GameOfLifeChunk";
import Chunk from "../shared/Chunk";
import BodyContainerLayout from "./BodyContainerLayout";
import DragChunk from "../shared/DragChunk";
import WindowDimensions from '../shared/WindowDimensions';
import BodyImages from '../shared/BodyImages';



const BodyContainer = () => {
  const { innerHeight, innerWidth } = WindowDimensions();
  const convertPercentToPx = () => {
    const boxes = BodyImages.map(box => {
      const newBox = box;
      const {left,top,width} = box;
      newBox.left = left * innerWidth / 100;
      newBox.top = top * innerHeight / 100;
      newBox.width = width * innerWidth / 100;
      return newBox;
    });
    return boxes;
  }
  const [boxes, setBoxes] = useState(convertPercentToPx);
  
  const [, drop] = useDrop({
    accept: "box",
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      moveBox(item.id, left, top);
      return undefined;
    }
  });
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top }
        }
      })
    );
  };

  
  return (
    <BodyContainerLayout ref={drop}>
      {boxes.map((box,i) => {
        const { left, top, title, width, src } = box;
        return (
          <DragChunk key={i} id={i} left={left} top={top} width={width} src={src}>
            {title}
          </DragChunk>
        );
      })}
    </BodyContainerLayout>
  );
};

export default BodyContainer;
