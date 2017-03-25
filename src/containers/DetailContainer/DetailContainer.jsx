import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";
import { Rectangle, Circle, SvgShape } from "units";
import { RectangleDetails, CircleDetails } from "components/details";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedItem } = this.props;

    const isCircle = selectedItem instanceof Circle;
    const isRectangle = selectedItem instanceof Rectangle;

    if (isCircle) return <CircleDetails data={selectedItem} />;
    if (isRectangle) return <RectangleDetails data={selectedItem} />;

    return null;
  }
}

function mapStateToProps(state) {
  return { selectedItem: state.svg.selectedItem };
}
DetailContainer.propTypes = {
  selectedItem: PropTypes.instanceOf(SvgShape)
};

export default connect(mapStateToProps)(DetailContainer);
