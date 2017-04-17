import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";

function mapStateToProps(state) {
  return { tools: state.svg.tools };
}

@connect(mapStateToProps)
class ToolbarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="toolbarContainer">
        <Toolbar tools={this.props.tools} />
      </div>
    );
  }
}

export default ToolbarContainer;
