import React, { Component, PropTypes } from "react";
import { SelectorEdge } from "components/renderers";
import { SvgShape } from "units";

const disableointerStyle = {
  pointerEvents: "none"
};
const circles = {
  display: "inline"
};
const circle = {
  pointerEvents: "all"
};

class SelectorSvg extends Component {
  static propTypes = {
    selectedItem: PropTypes.instanceOf(SvgShape)
  };
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.selectedItem) return null;
    return (
      <g className="selectGroup">
        <path
          style={disableointerStyle}
          id="selectedBox0"
          fill="none"
          stroke="#22C"
          strokeDasharray="5,5"
          d={this.props.selectedItem.edgesPath}
        />
        {this.renderCircles()}
      </g>
    );
  }
  renderCircles() {
    if (!this.props.selectedItem) return null;
    return (
      <g className="selectGroup">
        <path
          style={disableointerStyle}
          id="selectedBox0"
          fill="none"
          stroke="#22C"
          strokeDasharray="5,5"
          d={this.props.selectedItem.edgesPath}
        />
        <g style={circles}>
          {this.props.selectedItem.circles.map((child, index) => (
            <SelectorEdge data={child} key={index} />
          ))}
        </g>
      </g>
    );
  }
}

export default SelectorSvg;
