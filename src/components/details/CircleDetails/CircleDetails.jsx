import React, { Component, PropTypes } from "react";
import { SvgShape } from "units";
import style from "./CircleDetails.css";

export default class CircleDetails extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);

    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleOnChange(event) {
    const newValue = event.target.value;
    if (/^[+-]?\d*(\.\d*)?$/.test(newValue)) {
      this.setState({ value: newValue || "" });
    } else {
      this.setState({ value: this.state.value || "" });
    }
  }

  handleOnBlur() {
    if (this.props.value !== this.state.value) {
      const { value } = this.state;
      const parsedValue = value ? parseFloat(value) : "";
      this.props.onBlur(parsedValue);
    }
  }

  render() {
    return (
      <input
        type="text"
        className={style[this.props.className]}
        value={this.state.value}
        onChange={this.handleOnChange}
        onBlur={this.handleOnBlur}
        placeholder={this.props.placeholder}
      />
    );
  }
}

CircleDetails.propTypes = {
  data: PropTypes.instanceOf(SvgShape)
};
