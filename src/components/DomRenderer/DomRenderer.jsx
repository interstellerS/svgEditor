import React, { Component, PropTypes } from "react";
import { Svg, Circle } from "units";

import "./DomRenderer.css";

class DomRenderer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.data);
  }

  render() {
    const { data, index } = this.props;
    const isRoot = data instanceof Svg;
    return isRoot ? this.renderRootDom(data) : this.renderLeafDom(data);
  }

  renderLeafDom(data) {
    return (
      <li className="tree-item" onClick={this.handleClick}>
        <span> {data.type} </span>
      </li>
    );
  }

  renderRootDom(svg) {
    return (
      <li className="tree-item">
        <div
          className={
            "header listItem " +
              (svg.hasChildren ? "hasChildren " : "") +
              (svg.expanded ? "expanded " : "")
          }
        >
          {" "} svg document
        </div>
        <ol ref="svg" className="tree">
          {svg.children.map((child, index) => (
            <DomRenderer
              key={index}
              data={child}
              handleClick={this.props.handleClick}
            />
          ))}
        </ol>
      </li>
    );
  }
}

DomRenderer.propTypes = {
  data: PropTypes.instanceOf(Svg),
  handleClick: PropTypes.func.isRequired
};

export default DomRenderer;
