import React, { Component, PropTypes } from "react";
import { DragDropContext } from "react-dnd";
import { default as TouchBackend } from "react-dnd-touch-backend";

import {
  DetailContainer,
  ToolbarContainer,
  ViewerContainer,
  ToolbarTopContainer
} from "containers";
import CustomDragLayer from "../CustomDragLayer/CustomDragLayer";
import "./App.css";

@DragDropContext(TouchBackend({ enableMouseEvents: true }))
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="tree-column">
          <div className="menu">
            <i className="menu-icon material-icons">menu</i>
          </div>
          <ToolbarContainer />
        </div>
        <div className="viewer-column">
          <div className="detail-column">
            <ToolbarTopContainer />
            <DetailContainer />
          </div>
          <ViewerContainer />
        </div>
        <CustomDragLayer />
      </div>
    );
  }
}
