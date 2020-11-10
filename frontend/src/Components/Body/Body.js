import React from "react";
import BodyContainer from "./BodyContainer";
import Footer from "../Footer";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

const Body = () => (
  <>
    <DndProvider backend={HTML5Backend}>
      <BodyContainer />
    </DndProvider>
    <Footer />
  </>
);

export default Body;
