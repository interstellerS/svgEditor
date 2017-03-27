import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";
import { Rectangle, Circle, SvgShape } from "units";
import { RectangleDetails, CircleDetails } from "components/details";
import { changeSvgDetail, selectItem } from "redux/actions/svgActions";

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(name, attribute, value) {
    const { dispatch } = this.props;
    dispatch(changeSvgDetail(name, attribute, value));
  }

  render() {
    const { selectedItem } = this.props;

    const isCircle = selectedItem instanceof Circle;
    const isRectangle = selectedItem instanceof Rectangle;

    if (isCircle)
      return <CircleDetails data={selectedItem} onBlur={this.handleOnBlur} />;
    if (isRectangle)
      return (
        <RectangleDetails data={selectedItem} onBlur={this.handleOnBlur} />
      );
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
