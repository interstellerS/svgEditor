import React, { Component, PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import * as colors from "data/colors";
import style from "./LineDetails.css";

export default class LineDetails extends Component {
  constructor(props) {
    super(props);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputBlur(name, attribute, value) {
    this.props.onBlur(name, attribute, value);
  }

  render() {
    const line = this.props.data;
    return (
      <div className="details">
        <h4 className="LineDetails">Line Details</h4>
        <div className="inputs">
          <NumericInput
            name={line.name}
            attribute="x1"
            value={line.x1}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={line.name}
            attribute="y1"
            value={line.y1}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={line.name}
            attribute="x2"
            value={line.x2}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={line.name}
            attribute="y2"
            value={line.y2}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={line.name}
            attribute="strokeWidth"
            value={line.strokeWidth}
            onBlur={this.handleInputBlur}
          />
        </div>
        <div className="colors">
          <span>fill</span>
          <ColorPallete
            name={line.name}
            attribute="fill"
            value={line.fill}
            pallete={Object.values(colors)}
            palletePicked={this.handleInputBlur}
          />
        </div>
      </div>
    );
  }
}

LineDetails.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  onBlur: PropTypes.func.isRequired
};
