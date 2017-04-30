import React, { Component, PropTypes } from "react";
import { DragLayer } from "react-dnd";
import { ItemTypes } from "redux/constants/dndConstants";
import SvgDragPreview from "./SvgDragPreview";
import EdgeDragPreview from "./EdgeDragPreview";
import ToolDragPreview from "./ToolDragPreview";

@DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))
export default class CustomDragLayer extends Component {
  static propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    initialOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    currentOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { isDragging, ...rest } = this.props;
    if (!isDragging) {
      return null;
    }
    switch (this.props.itemType) {
      case ItemTypes.SVG_ITEM:
        return <SvgDragPreview {...rest} />;
      case ItemTypes.EDGE_ITEM:
        return <EdgeDragPreview {...rest} />;
      case ItemTypes.TOOL_ITEM:
        return <ToolDragPreview {...rest} />;
      default:
        return null;
    }
  }
}
