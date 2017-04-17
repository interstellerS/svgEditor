import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";
import { selectToolTop } from "redux/actions/svgActions";

function mapStateToProps(state) {
  return {
    toolsTop: state.svg.toolsTop,
    selectedTool: state.svg.selectedToolTop
  };
}

@connect(mapStateToProps)
class ToolbarContainer extends Component {
  constructor(props) {
    super(props);
    this.toolPicked = this.toolPicked.bind(this);
  }

  toolPicked(tool) {
    const { dispatch } = this.props;
    dispatch(selectToolTop(tool));
  }
  render() {
    return (
      <Toolbar
        tools={this.props.toolsTop}
        selectedTool={this.props.selectedTool}
        toolPicked={this.toolPicked}
        horizontal={true}
      />
    );
  }
}

export default ToolbarContainer;
