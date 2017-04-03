import React, { PropTypes } from "react";

import { Svg } from "units";
import { DomRenderer } from "components/renderers";

const RootDom = ({ data, handleClick }) => (
  <li className="tree-item">
    <div
      className={
        "header listItem " +
          (data.hasChildren ? "hasChildren " : "") +
          (data.expanded ? "expanded " : "")
      }
    >
      {" "} svg document
    </div>
    <ol className="tree">
      {data.children.map((child, index) => (
        <DomRenderer key={index} data={child} handleClick={handleClick} />
      ))}
    </ol>
  </li>
);

RootDom.propTypes = {
  data: PropTypes.instanceOf(Svg),
  handleClick: PropTypes.func.isRequired
};

export default RootDom;
