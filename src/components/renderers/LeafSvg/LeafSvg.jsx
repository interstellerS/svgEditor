import React, { PropTypes } from "react";

import { SvgShape, Circle, Rectangle, Line } from "units";

const LeafSvg = ({ data, handleClick }) => {
  const isCircle = data instanceof Circle;
  const isRectangle = data instanceof Rectangle;
  const isLine = data instanceof Line;

  if (isCircle)
    return (
      <circle
        r={data.r}
        cx={data.cx}
        cy={data.cy}
        fill={data.fill}
        onClick={() => handleClick(data)}
      />
    );
  if (isRectangle)
    return (
      <rect
        x={data.x}
        y={data.y}
        width={data.width}
        height={data.height}
        fill={data.fill}
        onClick={() => handleClick(data)}
      />
    );
  if (isLine)
    return (
      <line
        x1={data.x1}
        y1={data.y1}
        x2={data.x2}
        y2={data.y2}
        strokeWidth={data.strokeWidth}
        stroke={data.fill}
        onClick={() => handleClick(data)}
      />
    );
};

LeafSvg.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  handleClick: PropTypes.func.isRequired
};

export default LeafSvg;
