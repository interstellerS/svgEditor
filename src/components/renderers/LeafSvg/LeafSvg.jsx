import React, { PropTypes } from "react";

import { SvgShape, Circle, Rectangle, Line } from "units";

const LeafSvg = ({ data, handleClick }) => {
  const isCircle = data instanceof Circle;
  const isRectangle = data instanceof Rectangle;
  const isLine = data instanceof Line;

  if (isCircle)
    return <circle {...data.domProps} onClick={() => handleClick(data)} />;
  if (isRectangle)
    return <rect {...data.domProps} onClick={() => handleClick(data)} />;
  if (isLine)
    return <line {...data.domProps} onClick={() => handleClick(data)} />;
};

LeafSvg.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  handleClick: PropTypes.func.isRequired
};

export default LeafSvg;
