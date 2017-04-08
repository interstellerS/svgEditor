import React, { Component, PropTypes } from "react";
import SvgShape from "./SvgShape";

export default class Line extends SvgShape {
  constructor(options) {
    super(options);
  }

  get x1() {
    return this.get("x1");
  }

  set x1(value) {
    this.set("x1", value);
  }

  get y1() {
    return this.get("y1");
  }

  set y1(value) {
    this.set("y1", value);
  }

  get x2() {
    return this.get("x2");
  }

  set x2(value) {
    this.set("x2", value);
  }

  get y2() {
    return this.get("y2");
  }

  set y2(value) {
    this.set("y2", value);
  }

  get stroke() {
    return this.get("stroke");
  }

  set stroke(value) {
    this.set("stroke", value);
  }

  get strokeWidth() {
    return this.get("strokeWidth");
  }

  set strokeWidth(value) {
    this.set("strokeWidth", value);
  }

  get fill() {
    return this.get("fill");
  }

  set fill(value) {
    this.set("fill", value);
  }

  get type() {
    return "Line";
  }

  get domProps() {
    let { x1, x2, y1, y2, stroke, strokeWidth, fill } = this.toJS();
    return { x1, x2, y1, y2, stroke, strokeWidth, fill };
  }
}
