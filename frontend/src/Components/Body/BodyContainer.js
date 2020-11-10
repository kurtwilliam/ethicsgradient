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
  console.log(innerHeight, innerWidth);

  const [boxes, setBoxes] = useState(BodyImages);
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
    console.log(left,top);
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
      {Object.keys(boxes).map(key => {
        const { left, top, title, width, src } = boxes[key];
        console.log(width);
        console.log(width * innerWidth / 100);
        console.log(width / innerWidth / 100);
        return (
          <DragChunk key={key} id={key} left={left * innerWidth / 100} top={top * innerHeight / 100} width={width * innerWidth / 100} src={src}>
            {title}
          </DragChunk>
        );
      })}
    </BodyContainerLayout>
  );
};

export default BodyContainer;
