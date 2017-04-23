import React, { Component, PropTypes } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import $ from "jquery";
import { SvgRenderer } from "components/renderers";
import { Svg } from "units";
import { ItemTypes } from "redux/constants/dndConstants";
import {
  changeSvgDetail,
  createSvgElement,
  selectItem
} from "redux/actions/svgActions";

const stylesGroup = {
  pointerEvents: "all"
};
const stylesParent = {
  height: "100%",
  width: "100%"
};

const mapDispatchToProps = dispatch => ({
  move(name, attribute, value) {
    dispatch(changeSvgDetail(name, attribute, value));
  },
  create(tool, x, y) {
    dispatch(createSvgElement(tool, x, y));
  },
  selectItem(item) {
    dispatch(selectItem(item));
  }
});

const squareTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    switch (item.type) {
      case ItemTypes.SVG_ITEM:
        dropSvgItem(props, monitor, component);
        break;
      case ItemTypes.TOOL_ITEM:
        dropToolItem(props, monitor, component);
        break;
      default:
    }
  }
};

function dropSvgItem(props, monitor, component) {
  const item = monitor.getItem();
  const delta = monitor.getDifferenceFromInitialOffset();
  props.move(item.data.name, item.data.xAttributre, item.data.x + delta.x);
  props.move(item.data.name, item.data.yAttributre, item.data.y + delta.y);
}
function dropToolItem(props, monitor, component) {
  const item = monitor.getItem();
  const { x, y } = monitor.getClientOffset();
  const svg = $("#svgParent");
  const { top, left } = svg.getBoundingClientRect();
  props.create(item.tool, x - left, y - top);
  // TODO add drop tool item support
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
@connect(null, mapDispatchToProps)
@DropTarget([ItemTypes.SVG_ITEM, ItemTypes.TOOL_ITEM], squareTarget, collect)
class RootSvg extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Svg),
    handleClick: PropTypes.func.isRequired,
    data: PropTypes.instanceOf(Svg),
    handleClick: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("target clicket : " + event.target);
    if (event.target instanceof SVGSVGElement) {
      this.props.selectItem(null);
    }
  }
  render() {
    const { data, handleClick, connectDropTarget, isDragging } = this.props;
    const svgDocument = (
      <svg onClick={this.handleClick} id="svgcanvas" style={stylesParent}>
        <g style={stylesGroup}>
          {data.children.map((child, index) => (
            <SvgRenderer key={index} data={child} handleClick={handleClick} />
          ))}
        </g>
        <g className="selectGroup" />
      </svg>
    );
    return connectDropTarget(svgDocument);
  }
}

export default RootSvg;
