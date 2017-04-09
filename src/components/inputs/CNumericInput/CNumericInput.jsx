import React, { Component, PropTypes } from "react";
import NumericInput from "react-numeric-input";

import style from "./CNumericInput.css";

export class CNumericInput extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value) {
    this.props.onBlur(this.props.name, this.props.attribute, value);
  }

  render() {
    return (
      <label className="input-label">
        <span>{this.props.attribute}</span>
        <NumericInput
          value={this.props.value}
          onChange={value => this.handleOnChange(value)}
          className="form-control"
          style={false}
        />
      </label>
    );
  }
}

CNumericInput.propTypes = {
  name: PropTypes.string.isRequired,
  attribute: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func.isRequired
};