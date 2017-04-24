import React, { Component, PropTypes } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import $ from "jquery";
import Dimensions from "react-dimensions";
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
  position: "absolute",
  top: 0,
  left: 0
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
    this.state = { value: { x: 200, y: 200, svgHeight: 200, svgWidth: 200 } };
  }

  handleClick(event) {
    console.log("target clicket : " + event.target);
    if (event.target instanceof SVGSVGElement) {
      this.props.selectItem(null);
    }
  }
  setValue(nextValue) {
    this.setState({ value: nextValue });
  }
  getValue() {
    return !!this.state ? this.state.value : null;
  }
  getSvgDimensions(parentWidth, parentHeight) {
    let svgWidth = parentWidth * 0.6;
    let x = parentWidth * 0.2;
    let svgHeight = parentHeight * 0.6;
    let y = parentHeight * 0.2;
    let cords = {
      x,
      y,
      svgHeight,
      svgWidth
    };
    return cords;
  }
  render() {
    const { data, handleClick, connectDropTarget, isDragging } = this.props;
    let value = this.getSvgDimensions(
      this.props.containerWidth,
      this.props.containerHeight
    );
    const svgDocument = (
      <svg
        id="svgRoot"
        style={stylesParent}
        ref={svgRoot => this.svgRoot = svgRoot}
        width={this.props.containerWidth}
        height={this.props.containerHeight}
      >
        <svg
          id="svgContent"
          width={value.svgWidth}
          height={value.svgHeight}
          x={value.x}
          y={value.y}
          onClick={this.handleClick}
        >
          <g style={stylesGroup}>
            {data.children.map((child, index) => (
              <SvgRenderer key={index} data={child} handleClick={handleClick} />
            ))}
          </g>
          <g className="selectGroup" />
        </svg>
      </svg>
    );
    return connectDropTarget(svgDocument);
  }
}

export default Dimensions()(RootSvg);
