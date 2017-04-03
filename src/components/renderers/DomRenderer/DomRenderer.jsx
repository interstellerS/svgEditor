import React, { PropTypes } from "react";

import { SvgShape, Svg } from "units";
import { RootDom, LeafDom } from "components/renderers";

const DomRenderer = ({ data, handleClick }) => {
  const isRoot = data instanceof Svg;
  return isRoot
    ? <RootDom data={data} handleClick={handleClick} />
    : <LeafDom data={data} handleClick={handleClick} />;
};

DomRenderer.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  handleClick: PropTypes.func.isRequired
};

export default DomRenderer;
