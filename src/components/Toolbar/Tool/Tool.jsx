import React, { PropTypes } from "react";
import * as icons from "../Icons";
import "./Tool.css";

class Tool extends React.Component {
  static propTypes = {
    tool: PropTypes.string.isRequired,
    toolPicked: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
  };

  handleToolPicked(color) {
    this.props.toolPicked(this.props.tool);
  }

  renderIcon(tool) {
    let toolIcon;
    switch (tool) {
      case "select":
        toolIcon = <icons.IconSelect />;
        break;
      case "pencil":
        toolIcon = <icons.IconPencil />;
        break;
      case "line":
        toolIcon = <icons.IconLine />;
        break;
      case "rectangle":
        toolIcon = <icons.IconRectangle />;
        break;
      case "circle":
        toolIcon = <icons.IconCircle />;
        break;
      default:
        toolIcon = <icons.IconSelect />;
    }

    return toolIcon;
  }

  render() {
    return (
      <div
        className={
          (this.props.selected ? "tool-selected" : "") + " tool_button"
        }
        onClick={() => this.handleToolPicked(this.props.tool)}
      >
        {this.renderIcon(this.props.tool)}
      </div>
    );
  }
}

export default Tool;
