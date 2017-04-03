import React, { Component, PropTypes } from "react";
import { Svg } from "units";
import { UnitRenderer } from "components/renderers";

import "./Viewer.css";

class Viewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height, svg } = this.props;
    return (
      <UnitRenderer
        data={svg}
        isDom={false}
        handleClick={this.props.handleClick}
      />
    );
  }
}

Viewer.propTypes = {
  svg: PropTypes.instanceOf(Svg),
  handleClick: PropTypes.func.isRequired
};

export default Viewer;
