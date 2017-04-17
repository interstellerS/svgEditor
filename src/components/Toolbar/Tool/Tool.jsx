import React, { PropTypes } from "react";
import * as icons from "../Icons";
import "./Tool.css";

class Tool extends React.Component {
  static propTypes = {
    tool: PropTypes.string.isRequired
  };

  handlePalletePicked(color) {
    this.props.palletePicked(this.props.name, this.props.attribute, color);
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
        className="tool_button"
        onClick={() => this.handlePalletePicked(this.props.tool)}
      >
        {this.renderIcon(this.props.tool)}
      </div>
    );
  }
}

export default Tool;
