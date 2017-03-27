import React, { Component, PropTypes } from "react";
import SvgShape from "./SvgShape";

export default class Circle extends SvgShape {
  constructor(options) {
    super(options);
  }

  get r() {
    return this.get("r");
  }

  set r(value) {
    this.set("r", value);
  }

  get fill() {
    return this.get("fill");
  }

  set fill(value) {
    this.set("fill", value);
  }

  get cx() {
    return this.get("cx");
  }

  set cx(value) {
    this.set("cx", value);
  }

  get cy() {
    return this.get("cy");
  }

  set cy(value) {
    this.set("cy", value);
  }

  get type() {
    return "Circle";
  }
}
