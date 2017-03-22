import React, { Component, PropTypes } from "react";
import { Svg } from "units";
import { UnitRenderer } from "components";

import "./Viewer.css";

class Viewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height, svg } = this.props;
    return <UnitRenderer data={svg} isDom={false} />;
  }
}

Viewer.propTypes = {
  svg: PropTypes.instanceOf(Svg)
};

export default Viewer;
