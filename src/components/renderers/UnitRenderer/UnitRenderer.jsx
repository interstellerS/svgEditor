import React, { Component, PropTypes } from "react";
import { Svg, Circle } from "units";
import { DomRenderer, SvgRenderer } from "components/renderers";
class UnitRenderer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, isDom, handleClick } = this.props;
    return isDom
      ? <DomRenderer data={data} handleClick={handleClick} />
      : <SvgRenderer data={data} handleClick={handleClick} />;
  }
}

UnitRenderer.propTypes = {
  svg: PropTypes.instanceOf(Svg),
  index: React.PropTypes.number,
  isDom: React.PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default UnitRenderer;
