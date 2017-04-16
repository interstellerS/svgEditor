import React, { Component, PropTypes } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import { SvgRenderer } from "components/renderers";
import { Svg } from "units";
import { ItemTypes } from "redux/constants/dndConstants";
import { changeSvgDetail } from "redux/actions/svgActions";
const mapDispatchToProps = dispatch => ({
  move(name, attribute, value) {
    dispatch(changeSvgDetail(name, attribute, value));
  }
});

const squareTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    props.move(item.name, "cx", item.cx + delta.x);
    props.move(item.name, "cy", item.cy + delta.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
@connect(null, mapDispatchToProps)
@DropTarget(ItemTypes.SVG_ITEM, squareTarget, collect)
class RootSvg extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Svg),
    handleClick: PropTypes.func.isRequired,
    data: PropTypes.instanceOf(Svg),
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const { data, handleClick, connectDropTarget, isDragging } = this.props;
    const svgDocument = (
      <svg className="svgRendered">
        {data.children.map((child, index) => (
          <SvgRenderer key={index} data={child} handleClick={handleClick} />
        ))}
      </svg>
    );
    return connectDropTarget(svgDocument);
  }
}

export default RootSvg;
