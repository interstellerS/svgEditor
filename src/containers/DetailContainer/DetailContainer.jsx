import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Toolbar } from "components";
import { Rectangle, Circle, SvgShape, Line } from "units";
import * as icons from "components/Toolbar/Icons";
import { Tool } from "components";
import { slide as Menu } from "react-burger-menu";
import "./DetailContainer.css";

import {
  RectangleDetails,
  CircleDetails,
  LineDetails
} from "components/details";
import {
  changeSvgDetail,
  selectItem,
  changeSvgAlign
} from "redux/actions/svgActions";

var styles = {
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  }
};

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
    this.toggle = this.toggle.bind(this);
    this.onAlignPicked = this.onAlignPicked.bind(this);
    this.state = { isOpen: true };
  }
  handleOnBlur(name, attribute, value) {
    const { dispatch } = this.props;
    dispatch(changeSvgDetail(name, attribute, value));
  }
  onAlignPicked(value) {
    let { name } = this.props.selectedItem;
    const { dispatch } = this.props;
    dispatch(changeSvgAlign(name, value));
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  renderPopover() {
    const { selectedItem } = this.props;
    const { isOpen } = this.state;

    const isCircle = selectedItem instanceof Circle;
    const isRectangle = selectedItem instanceof Rectangle;
    const isLine = selectedItem instanceof Line;
    let details;
    if (isLine)
      details = (
        <LineDetails
          data={selectedItem}
          onBlur={this.handleOnBlur}
          onAlignPicked={this.onAlignPicked}
        />
      );
    if (isCircle)
      details = (
        <CircleDetails
          data={selectedItem}
          onBlur={this.handleOnBlur}
          onAlignPicked={this.onAlignPicked}
        />
      );

    if (isRectangle)
      details = (
        <RectangleDetails
          data={selectedItem}
          onBlur={this.handleOnBlur}
          onAlignPicked={this.onAlignPicked}
        />
      );

    return (
      <Menu
        isOpen={isOpen}
        customBurgerIcon={false}
        right
        width={280}
        styles={styles}
        noOverlay
      >
        <div>
          {details}
        </div>
      </Menu>
    );
  }

  render() {
    return (
      <div id="details">
        <div className="tool_button toolsBtn" onClick={() => this.toggle()}>
          <icons.IconTool color="#566270" />
        </div>
        {this.renderPopover()}
      </div>
    );
  }
}

export default DetailContainer;
