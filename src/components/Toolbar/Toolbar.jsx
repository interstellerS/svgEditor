import React, { PropTypes, Component } from "react";
import { ColorSelector, InputEditor, RangeEditor } from "components";
import Tool from "./Tool/Tool";

import "./Toolbar.css";

class Toolbar extends Component {
  static propTypes = {
    tools: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  renderTools() {
    return this.props.tools.map((tool, i) => <Tool tool={tool} key={i} />);
  }

  render() {
    return (
      <div className="tools_panel">
        {this.renderTools()}
      </div>
    );
  }
}

export default Toolbar;
