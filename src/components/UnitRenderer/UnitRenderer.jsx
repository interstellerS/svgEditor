import React, { Component, PropTypes } from "react";
import { Svg, Circle } from "units";
import { SvgRenderer, DomRenderer } from "components";

class UnitRenderer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, index } = this.props;
    const isDom = !!this.props.isDom;
    return isDom
      ? <DomRenderer
          data={data}
          index={index}
          handleClick={this.props.handleClick}
        />
      : <SvgRenderer
          data={data}
          index={index}
          handleClick={this.props.handleClick}
        />;
  }
}

UnitRenderer.propTypes = {
  svg: PropTypes.instanceOf(Svg),
  index: React.PropTypes.number,
  isDom: React.PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default UnitRenderer;
