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
      ? <DomRenderer data={data} index={index} />
      : <SvgRenderer data={data} index={index} />;
  }
}

UnitRenderer.propTypes = {
  svg: PropTypes.instanceOf(Svg),
  index: React.PropTypes.number,
  isDom: React.PropTypes.bool
};

export default UnitRenderer;
