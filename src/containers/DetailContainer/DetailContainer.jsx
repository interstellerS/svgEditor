import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";
import { Rectangle, Circle, SvgShape, Line } from "units";
import {
  RectangleDetails,
  CircleDetails,
  LineDetails
} from "components/details";
import { changeSvgDetail, selectItem } from "redux/actions/svgActions";

function mapStateToProps(state) {
  return { selectedItem: state.svg.selectedItem };
}

@connect(mapStateToProps)
class DetailContainer extends Component {
  static propTypes = {
    selectedItem: PropTypes.instanceOf(SvgShape)
  };

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
    const isLine = selectedItem instanceof Line;

    if (isLine)
      return <LineDetails data={selectedItem} onBlur={this.handleOnBlur} />;
    if (isCircle)
      return <CircleDetails data={selectedItem} onBlur={this.handleOnBlur} />;
    if (isRectangle)
      return (
        <RectangleDetails data={selectedItem} onBlur={this.handleOnBlur} />
      );
    return null;
  }
}

export default DetailContainer;
