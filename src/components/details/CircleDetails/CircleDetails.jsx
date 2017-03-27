import React, { Component, PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import * as colors from "data/colors";
import style from "./CircleDetails.css";

export default class CircleDetails extends Component {
  constructor(props) {
    super(props);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputBlur(name, attribute, value) {
    this.props.onBlur(name, attribute, value);
  }

  render() {
    const circle = this.props.data;
    return (
      <div>
        <h4 className="CircleDetails">Circle Details</h4>
        <div className="inputs">
          <NumericInput
            name={circle.name}
            attribute="r"
            value={circle.r}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={circle.name}
            attribute="cx"
            value={circle.cx}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={circle.name}
            attribute="cy"
            value={circle.cy}
            onBlur={this.handleInputBlur}
          />
        </div>
        <div className="colors">
          <span>fill</span>
          <ColorPallete
            name={circle.name}
            attribute="fill"
            value={circle.fill}
            pallete={Object.values(colors)}
            palletePicked={this.handleInputBlur}
          />
        </div>

      </div>
    );
  }
}

CircleDetails.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  onBlur: PropTypes.func.isRequired
};
