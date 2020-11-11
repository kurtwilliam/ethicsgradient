import React from "react";
import Header from "../Header";
import BodyContainer from "./BodyContainer";
import Footer from "../Footer";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

const Body = () => (
  <>
    <Header />
    <DndProvider backend={HTML5Backend}>
      <BodyContainer />
    </DndProvider>
    <Footer />
  </>
);

export default Body;
