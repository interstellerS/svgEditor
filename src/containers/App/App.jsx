import React, { Component, PropTypes } from "react";
import { DragDropContext } from "react-dnd";
import MouseBackEnd from "react-dnd-mouse-backend";

import { DetailContainer, TreeContainer, ViewerContainer } from "containers";
import "./App.css";

@DragDropContext(MouseBackEnd)
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="tree-column">
          <TreeContainer />
        </div>
        <div className="viewer-column">
          <ViewerContainer />
        </div>
        <div className="detail-column">
          <DetailContainer />
        </div>
      </div>
    );
  }
}
