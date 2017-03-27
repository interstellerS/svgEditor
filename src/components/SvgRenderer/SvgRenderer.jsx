import React, { Component, PropTypes } from "react";
import { Svg, Circle, Rectangle, Line } from "units";

import "./SvgRenderer.css";

class SvgRenderer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.data);
  }

  render() {
    const { data } = this.props;
    const isRoot = data instanceof Svg;
    return isRoot ? this.renderRootSvg(data) : this.renderLeafSvg(data);
  }

  renderLeafSvg(svg) {
    const isCircle = svg instanceof Circle;
    const isRectangle = svg instanceof Rectangle;
    const isLine = svg instanceof Line;

    if (isCircle)
      return (
        <circle
          r={svg.r}
          cx={svg.cx}
          cy={svg.cy}
          fill={svg.fill}
          onClick={this.handleClick}
        />
      );
    if (isRectangle)
      return (
        <rect
          x={svg.x}
          y={svg.y}
          width={svg.width}
          height={svg.height}
          fill={svg.fill}
          onClick={this.handleClick}
        />
      );
    if (isLine)
      return (
        <line
          x1={svg.x1}
          y1={svg.y1}
          x2={svg.x2}
          y2={svg.y2}
          strokeWidth={svg.strokeWidth}
          stroke={svg.fill}
          onClick={this.handleClick}
        />
      );
  }
  renderRootSvg(svg) {
    return (
      <svg ref="svg" className="svgRendered">
        {svg.children.map((child, index) => (
          <SvgRenderer
            key={index}
            data={child}
            handleClick={this.props.handleClick}
          />
        ))}
      </svg>
    );
  }
}

SvgRenderer.propTypes = {
  data: PropTypes.instanceOf(Svg),
  handleClick: PropTypes.func.isRequired
};

export default SvgRenderer;
