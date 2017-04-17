import React, { Component, PropTypes } from "react";
import { DragDropContext } from "react-dnd";
import MouseBackEnd from "react-dnd-mouse-backend";
import { default as TouchBackend } from "react-dnd-touch-backend";

import { DetailContainer, ToolbarContainer, ViewerContainer } from "containers";
import CustomDragLayer from "../CustomDragLayer/CustomDragLayer";
import "./App.css";

@DragDropContext(TouchBackend({ enableMouseEvents: true }))
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="tree-column">
          <ToolbarContainer />
        </div>
        <div className="viewer-column">
          <ViewerContainer />
        </div>
        <div className="detail-column">
          <DetailContainer />
        </div>
        <CustomDragLayer />
      </div>
    );
  }
}
