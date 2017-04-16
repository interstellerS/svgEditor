import React, { PropTypes } from "react";
import { DragSource } from "react-dnd";
import { SvgShape } from "units";
import { ItemTypes } from "redux/constants/dndConstants";

const svgItemSource = {
  beginDrag(props) {
    return props.data.allProps;
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
class LeafDom extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    data: PropTypes.instanceOf(SvgShape),
    handleClick: PropTypes.func.isRequired
  };

  componentDidMount() {
    const img = <p>testttttt</p>;
    this.props.connectDragPreview(img);
  }
  render() {
    const {
      data,
      handleClick,
      connectDragSource,
      connectDragPreview,
      isDragging
    } = this.props;
    const item = (
      <li className="tree-item" onClick={() => handleClick(data)}>
        <span> {data.type} </span>
      </li>
    );
    return connectDragSource(item);
  }
}

export default LeafDom;
