import React, { PropTypes, Component } from "react";
import { ColorSelector, InputEditor, RangeEditor } from "components";
import Tool from "./Tool/Tool";

import "./Toolbar.css";

class Toolbar extends Component {
  static propTypes = {
    tools: PropTypes.array.isRequired,
    selectedTool: PropTypes.string.isRequired,
    toolPicked: PropTypes.func.isRequired,
    horizontal: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  renderTools() {
    return this.props.tools.map((tool, i) => (
      <Tool
        tool={tool}
        key={i}
        toolPicked={this.props.toolPicked}
        selected={this.props.selectedTool == tool}
      />
    ));
  }

  render() {
    return (
      <div className="toolbarContainer">
        <div
          className={
            this.props.horizontal
              ? "tools-panel-horizontal"
              : "tools-panel-vertical"
          }
        >
          {this.renderTools()}
        </div>
      </div>
    );
  }
}

export default Toolbar;
