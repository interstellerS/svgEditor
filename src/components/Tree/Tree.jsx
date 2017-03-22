import React, { Component, PropTypes } from "react";
import { Svg } from "units";
import { UnitRenderer } from "components";

import "./Tree.css";

class Tree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { svg } = this.props;
    return <UnitRenderer data={svg} isDom={true} />;
  }
}

Tree.propTypes = {
  svg: PropTypes.instanceOf(Svg)
};

export default Tree;
