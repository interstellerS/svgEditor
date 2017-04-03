import React, { Component, PropTypes } from "react";
import { Svg } from "units";
import { UnitRenderer } from "components/renderers";

import "./Tree.css";

class Tree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { svg } = this.props;
    return (
      <UnitRenderer
        data={svg}
        isDom={true}
        handleClick={this.props.handleClick}
      />
    );
  }
}

Tree.propTypes = {
  svg: PropTypes.instanceOf(Svg),
  handleClick: PropTypes.func.isRequired
};

export default Tree;
