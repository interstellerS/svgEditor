import React, { Component, PropTypes } from "react";

import style from "./ColorPallete.css";

export default class ColorPallete extends Component {
  constructor(props) {
    super(props);
    this.handlePalletePicked = this.handlePalletePicked.bind(this);
  }

  handlePalletePicked(color) {
    this.props.palletePicked(this.props.name, this.props.attribute, color);
  }

  renderPallete() {
    const { value } = this.props;
    return this.props.pallete.map((color, i) => (
      <div
        className={(color === value ? "pallete-active" : "") + " palette-item"}
        key={i}
        style={{ height: 20, backgroundColor: color }}
        onClick={() => this.handlePalletePicked(color)}
      />
    ));
  }

  render() {
    return (
      <div className="palette">
        {this.renderPallete()}
      </div>
    );
  }
}

ColorPallete.propTypes = {
  name: PropTypes.string.isRequired,
  attribute: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pallete: PropTypes.array.isRequired,
  palletePicked: PropTypes.func.isRequired
};
