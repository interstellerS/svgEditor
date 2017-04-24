import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Viewer } from "components";
import { Svg } from "units";
import { selectItem } from "redux/actions/svgActions";

function mapStateToProps(state) {
  return state.svg;
}

@connect(mapStateToProps)
class ViewerContainer extends Component {
  static propTypes = {
    svg: PropTypes.instanceOf(Svg)
  };
  constructor(props) {
    super(props);
    this.state = { height: 0, width: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const { dispatch } = this.props;
    dispatch(selectItem(item));
  }

  render() {
    return (
      <Viewer
        {...this.props}
        height={this.state.height}
        width={this.state.width}
        handleClick={this.handleClick}
      />
    );
  }
}

export default ViewerContainer;
