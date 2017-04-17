import React, { Component, PropTypes } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

import style from "./ColorPallete.css";

export default class ColorPallete extends Component {
  constructor(props) {
    super(props);
    this.handlePalletePicked = this.handlePalletePicked.bind(this);
  }

  handlePalletePicked(color) {
    this.props.palletePicked(this.props.name, this.props.attribute, color);
  }

  state = {
    displayColorPicker: false
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.props.palletePicked(this.props.name, this.props.attribute, color.hex);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `${this.props.value}`
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div className="react-numeric-input">
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker
          ? <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <SketchPicker
                color={this.props.value}
                onChange={this.handleChange}
              />
            </div>
          : null}

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
