import React, { Component, PropTypes } from "react";
import { Svg, Circle } from "units";

import "./SvgRenderer.css";

class SvgRenderer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const isRoot = data instanceof Svg;
    return isRoot ? this.renderRootSvg(data) : this.renderLeafSvg(data);
  }

  renderLeafSvg(svg) {
    const isCircle = svg instanceof Circle;
    const jsx = isCircle
      ? <circle r={svg.r} cx={svg.cx} cy={svg.cy} fill={svg.fill} />
      : <rect
          x={svg.x}
          y={svg.y}
          width={svg.width}
          height={svg.height}
          fill={svg.fill}
        />;
    return jsx;
  }
  renderRootSvg(svg) {
    return (
      <svg ref="svg" className="svgRendered">
        {svg.children.map((child, index) => (
          <SvgRenderer key={index} data={child} />
        ))}
      </svg>
    );
  }
}

SvgRenderer.propTypes = {
  data: PropTypes.instanceOf(Svg)
};

export default SvgRenderer;
