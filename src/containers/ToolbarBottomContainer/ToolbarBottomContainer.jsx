import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";
import { selectColor } from "redux/actions/svgActions";
import { CompactPicker } from "react-color";
import "./ToolbarBottomContainer.css";

function mapStateToProps(state) {
  return {
    selectedColor: state.svg.selectedColor
  };
}

@connect(mapStateToProps)
class ToolbarBottomContainer extends Component {
  constructor(props) {
    super(props);
    this.colorPicked = this.colorPicked.bind(this);
  }

  colorPicked(color) {
    const { dispatch } = this.props;
    dispatch(selectColor(color.hex));
  }
  render() {
    return (
      <CompactPicker
        color={this.props.selectedColor}
        onChangeComplete={this.colorPicked}
        triangle="hide-triangle"
        width="100%"
      />
    );
  }
}

export default ToolbarBottomContainer;
