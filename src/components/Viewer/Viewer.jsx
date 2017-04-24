import React, { Component, PropTypes } from "react";
import { Svg } from "units";
import { UnitRenderer } from "components/renderers";
import { Ruler } from "components";

import "./Viewer.css";

class Viewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height, svg } = this.props;
    return (
      <div className="svgContainer">
        <Ruler />
        <UnitRenderer
          data={svg}
          isDom={false}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

Viewer.propTypes = {
  svg: PropTypes.instanceOf(Svg),
  handleClick: PropTypes.func.isRequired
};

export default Viewer;
