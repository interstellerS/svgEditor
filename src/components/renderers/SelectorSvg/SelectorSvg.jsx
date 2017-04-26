import React, { Component, PropTypes } from "react";
import { SvgShape } from "units";

const disableointerStyle = {
  pointerEvents: "none"
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
      </g>
    );
  }
}

export default SelectorSvg;
