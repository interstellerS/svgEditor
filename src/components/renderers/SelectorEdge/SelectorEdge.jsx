import React, { Component, PropTypes } from "react";
import { DragSource } from "react-dnd";
import { ItemTypes } from "redux/constants/dndConstants";

const svgItemSource = {
  beginDrag(props) {
    return {
      type: ItemTypes.EDGE_ITEM,
      data: props.data
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

@DragSource(ItemTypes.EDGE_ITEM, svgItemSource, collect)
class SelectorEdge extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    data: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      orientation: PropTypes.String
    })
  };

  componentDidMount() {
    const img = <circle cx={10} cx={20} r={30} />;
    this.props.connectDragPreview(img);
  }

  render() {
    const {
      data,
      connectDragSource,
      isDragging
    } = this.props;

    const jxsElement = <circle {...data} r={5} fill="#22C" />;

    return connectDragSource(jxsElement);
  }
}

export default SelectorEdge;
