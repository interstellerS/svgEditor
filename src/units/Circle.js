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
  // those x and y attribute , are juste decorators methods just to normalize with what are rectangle svg
  // details attribute are , willl soon see what other svg elements be ... to be continued :/
  get x() {
    return this.get("cx");
  }

  set x(value) {
    this.set("cx", value);
  }

  get y() {
    return this.get("cy");
  }

  set y(value) {
    this.set("cy", value);
  }

  get type() {
    return "Circle";
  }

  get domProps() {
    let { r, fill, cx, cy } = this.toJS();
    return { r, fill, cx, cy };
  }

  get allProps() {
    return Object.assign({ name: this.name }, this.domProps);
  }

  get xAttributre() {
    return "cx";
  }
  get yAttributre() {
    return "cy";
  }

  get edges() {
    return [
      { x: this.cx - this.r, y: this.cy - this.r },
      { x: this.cx + this.r, y: this.cy - this.r },
      { x: this.cx + this.r, y: this.cy + this.r },
      { x: this.cx - this.r, y: this.cy + this.r }
    ];
  }

  get edgesPath() {
    return `M${this.edges[0].x},${this.edges[0].y} L${this.edges[1].x},${this.edges[1].y} ${this.edges[2].x},${this.edges[2].y} ${this.edges[3].x},${this.edges[3].y}z`;
  }
}
