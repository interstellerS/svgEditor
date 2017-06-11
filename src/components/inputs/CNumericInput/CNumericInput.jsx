import React, { Component, PropTypes } from "react";
import NumericInput from "react-numeric-input";
import InputRange from "react-input-range";
import $ from "jquery";

import style from "./CNumericInput.css";
import "react-input-range/lib/css/index.css";

export class CNumericInput extends Component {
  constructor(props) {
    super(props);
    this.state = { max: 100 };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
    placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    horizontal: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired
  };

  handleOnChange(value) {
    this.props.onBlur(this.props.name, this.props.attribute, value);
  }

  componentDidMount() {
    if (!!$("#rectBackground")) return false;
    const { width, height } = $("#rectBackground")[0].getBoundingClientRect();
    this.setState({
      max: this.props.horizontal ? Math.round(width) : Math.round(height)
    });
  }

  render() {
    return (
      <div className="numericInput">
        <span className="attribute"> {this.props.attribute} </span>
        <InputRange
          value={Math.round(this.props.value)}
          onChange={value => this.handleOnChange(value)}
          maxValue={this.state.max}
          minValue={0}
        />
      </div>
    );
  }
}
