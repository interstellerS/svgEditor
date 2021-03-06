import React, { Component, PropTypes } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import $ from "jquery";
import Dimensions from "react-dimensions";
import { SvgRenderer, SelectorSvg } from "components/renderers";
import { Svg } from "units";
import { ItemTypes } from "redux/constants/dndConstants";
import { ORIENTATION } from "redux/constants/dndConstants";
import { selectItem, dropItem } from "redux/actions/svgActions";

const enablePointerStyle = {
  pointerEvents: "all"
};
const disableointerStyle = {
  pointerEvents: "all"
};
const stylesParent = {
  position: "absolute",
  top: 0,
  left: 0
};

const mapDispatchToProps = dispatch => ({
  drop(monitor, component) {
    dispatch(dropItem(monitor, component));
  },
  selectItem(item) {
    dispatch(selectItem(item));
  }
});
const mapStateToProps = state => {
  return { selectedItem: state.svg.selectedItem };
};
const squareTarget = {
  drop(props, monitor, component) {
    props.drop(monitor, component);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@connect(mapStateToProps, mapDispatchToProps)
@DropTarget(
  [ItemTypes.SVG_ITEM, ItemTypes.TOOL_ITEM, ItemTypes.EDGE_ITEM],
  squareTarget,
  collect
)
class RootSvg extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Svg),
    handleClick: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
    this.state = { value: { x: 200, y: 200, svgHeight: 200, svgWidth: 200 } };
  }

  handleBackgroundClick(event) {
    if (event.target.id == "rectBackground") {
      this.props.selectItem(null);
    }
  }
  setValue(nextValue) {
    this.setState({ value: nextValue });
  }
  getValue() {
    return !!this.state ? this.state.value : null;
  }
  renderBackround(value) {
    return (
      <svg id="svgBackground" {...value} style={disableointerStyle}>
        <rect
          id="rectBackground"
          onClick={this.handleBackgroundClick}
          width="100%"
          height="100%"
          x="0"
          y="0"
          stroke="#000"
          fill="#FFF"
        />
      </svg>
    );
  }
  getSvgDimensions(parentWidth, parentHeight) {
    let width = parentWidth * 0.6;
    let x = parentWidth * 0.2;
    let height = parentHeight * 0.6;
    let y = parentHeight * 0.2;
    let cords = {
      x,
      y,
      width,
      height
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
        {this.renderBackround(value)}
        <svg id="svgContent" {...value}>
          <g style={enablePointerStyle}>
            {data.children.map((child, index) => (
              <SvgRenderer key={index} data={child} handleClick={handleClick} />
            ))}
          </g>
          <SelectorSvg selectedItem={this.props.selectedItem} />
        </svg>
      </svg>
    );
    return connectDropTarget(svgDocument);
  }
}

export default Dimensions()(RootSvg);
