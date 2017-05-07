import React, { Component, PropTypes } from "react";
import { DragSource } from "react-dnd";
import { SvgShape, Circle, Rectangle, Line, Path } from "units";
import { ItemTypes } from "redux/constants/dndConstants";

const style = {
  cursor: "move"
};

const svgItemSource = {
  beginDrag(props) {
    return {
      type: ItemTypes.SVG_ITEM,
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

@DragSource(ItemTypes.SVG_ITEM, svgItemSource, collect)
class LeafSvg extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    data: PropTypes.instanceOf(SvgShape),
    handleClick: PropTypes.func.isRequired
  };

  componentDidMount() {
    const img = <circle cx={10} cx={20} r={30} />;
    this.props.connectDragPreview(img);
  }

  render() {
    const {
      data,
      handleClick,
      connectDragSource,
      isDragging
    } = this.props;

    const isCircle = data instanceof Circle;
    const isRectangle = data instanceof Rectangle;
    const isLine = data instanceof Line;
    const isPath = data instanceof Path;

    let jxsElement;
    if (isCircle)
      jxsElement = (
        <circle
          {...data.domProps}
          style={style}
          onClick={() => handleClick(data)}
        />
      );
    if (isRectangle)
      jxsElement = (
        <rect
          {...data.domProps}
          style={style}
          onClick={() => handleClick(data)}
        />
      );
    if (isLine)
      jxsElement = (
        <line
          {...data.domProps}
          style={style}
          onClick={() => handleClick(data)}
        />
      );
    if (isPath)
      jxsElement = (
        <path
          {...data.domProps}
          style={style}
          onClick={() => handleClick(data)}
        />
      );
    return connectDragSource(jxsElement);
  }
}

export default LeafSvg;
