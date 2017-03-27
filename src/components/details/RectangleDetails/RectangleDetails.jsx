import React, { Component, PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import * as colors from "data/colors";
import style from "./RectangleDetails.css";

export default class Rectangle extends Component {
  constructor(props) {
    super(props);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputBlur(name, attribute, value) {
    this.props.onBlur(name, attribute, value);
  }

  render() {
    const rectangle = this.props.data;
    return (
      <div className="details">
        <h4 className="CircleDetails">Rectangle Details</h4>
        <div className="inputs">
          <NumericInput
            name={rectangle.name}
            attribute="x"
            value={rectangle.x}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={rectangle.name}
            attribute="y"
            value={rectangle.y}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={rectangle.name}
            attribute="width"
            value={rectangle.width}
            onBlur={this.handleInputBlur}
          />
          <NumericInput
            name={rectangle.name}
            attribute="height"
            value={rectangle.height}
            onBlur={this.handleInputBlur}
          />
        </div>
        <div className="colors">
          <span>fill</span>
          <ColorPallete
            name={rectangle.name}
            attribute="fill"
            value={rectangle.fill}
            pallete={Object.values(colors)}
            palletePicked={this.handleInputBlur}
          />
        </div>
      </div>
    );
  }
}

Rectangle.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  onBlur: PropTypes.func.isRequired
};
