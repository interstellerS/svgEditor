import React, { PropTypes } from "react";

import { SvgRenderer } from "components/renderers";
import { Svg } from "units";

const RootSvg = ({ data, handleClick }) => (
  <svg className="svgRendered">
    {data.children.map((child, index) => (
      <SvgRenderer key={index} data={child} handleClick={handleClick} />
    ))}
  </svg>
);

RootSvg.propTypes = {
  data: PropTypes.instanceOf(Svg),
  handleClick: PropTypes.func.isRequired
};

export default RootSvg;
