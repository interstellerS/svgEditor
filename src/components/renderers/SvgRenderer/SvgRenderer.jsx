import React, { PropTypes } from "react";
import { SvgShape, Svg } from "units";
import { RootSvg, LeafSvg } from "components/renderers";
import "./SvgRenderer.css";

const SvgRenderer = ({ data, handleClick }) => {
  const isRoot = data instanceof Svg;
  return isRoot
    ? <RootSvg data={data} handleClick={handleClick} />
    : <LeafSvg data={data} handleClick={handleClick} />;
};

SvgRenderer.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  handleClick: PropTypes.func.isRequired
};

export default SvgRenderer;
