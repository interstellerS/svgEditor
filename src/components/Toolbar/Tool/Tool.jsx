import React, { PropTypes } from "react";
import { DragSource } from "react-dnd";
import { ItemTypes } from "redux/constants/dndConstants";
import * as icons from "../Icons";
import "./Tool.css";

const svgItemSource = {
  beginDrag(props) {
    return { type: ItemTypes.TOOL_ITEM, tool: props.tool };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

@DragSource(ItemTypes.TOOL_ITEM, svgItemSource, collect)
class Tool extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
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
        tiik;
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
      case "undo":
        toolIcon = <icons.IconUndo />;
        break;
      case "redo":
        toolIcon = <icons.IconRedo />;
        break;
      default:
        toolIcon = <icons.IconSelect />;
    }

    return toolIcon;
  }

  render() {
    const {
      connectDragSource
    } = this.props;

    const toolHTML = (
      <div
        className={
          (this.props.selected ? "tool-selected" : "") + " tool_button"
        }
        onClick={() => this.handleToolPicked(this.props.tool)}
      >
        {this.renderIcon(this.props.tool)}
      </div>
    );
    return connectDragSource(toolHTML);
  }
}

export default Tool;
