import React, { Component, PropTypes } from "react";
import NumericInput from "react-numeric-input";
import InputRange from "react-input-range";
import $ from "jquery";

import style from "./CNumericInput.css";
import "react-input-range/lib/css/index.css";

export class CNumericInput extends Component {
  constructor(props) {
    super(props);
    this.state = { svgWidth: 100 };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value) {
    this.props.onBlur(this.props.name, this.props.attribute, value);
  }

  // TODO refac : Jquery is an antipattern in react apps  -> refac this code
  componentDidMount() {
    const svgWidth = $("#rectBackground")[0].getBoundingClientRect().width;
    this.setState({ svgWidth: Math.round(svgWidth) });
  }

  render() {
    return (
      <div className="numericInput">
        <span className="attribute"> {this.props.attribute} </span>
        <InputRange
          value={Math.round(this.props.value)}
          onChange={value => this.handleOnChange(value)}
          maxValue={this.state.svgWidth}
          minValue={0}
        />
      </div>
    );
  }
}

CNumericInput.propTypes = {
  name: PropTypes.string.isRequired,
  attribute: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func.isRequired
};
