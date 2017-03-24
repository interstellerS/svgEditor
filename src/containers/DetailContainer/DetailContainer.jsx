import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";
import { Rectangle, Circle } from "units";
import { RectangleDetails, CircleDetails } from "components/details";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectItem } = this.props;

    const isCircle = selectItem instanceof Circle;
    const isRectangle = selectItem instanceof Rectangle;

    if (isCircle) return <RectangleDetails data={selectItem} />;
    if (isRectangle) return <CircleDetails data={selectItem} />;

    return null;
  }
}

function mapStateToProps(state) {
  return state.selectItem;
}

export default connect(mapStateToProps)(DetailContainer);
