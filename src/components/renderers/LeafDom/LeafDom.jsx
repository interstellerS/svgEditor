import React, { PropTypes } from "react";
import { SvgShape } from "units";

const LeafDom = ({ data, handleClick }) => (
  <li className="tree-item" onClick={() => handleClick(data)}>
    <span> {data.type} </span>
  </li>
);

LeafDom.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  handleClick: PropTypes.func.isRequired
};

export default LeafDom;
