import React, { Component, PropTypes } from "react";
import SvgShape from "./SvgShape";

export default class Rectangle extends SvgShape {
  constructor(options) {
    super(options);
  }

  get x() {
    return this.get("x");
  }

  set x(value) {
    this.set("x", value);
  }

  get y() {
    return this.get("y");
  }

  set y(value) {
    this.set("y", value);
  }

  get width() {
    return this.get("width");
  }

  set width(value) {
    this.set("width", value);
  }

  get height() {
    return this.get("height");
  }

  set height(value) {
    this.set("height", value);
  }

  get fill() {
    return this.get("fill");
  }

  set fill(value) {
    this.set("fill", value);
  }

  get type() {
    return "Rectangle";
  }

  get domProps() {
    let { x, y, width, height, fill } = this.toJS();
    return { x, y, width, height, fill };
  }

  get allProps() {
    return Object.assign({ name: this.name }, this.domProps);
  }

  get xAttributre() {
    return "x";
  }
  get yAttributre() {
    return "y";
  }

  get edges() {
    return [
      { x: this.x, y: this.y },
      { x: this.x + this.width, y: this.y },
      { x: this.x + this.width, y: this.y + this.height },
      { x: this.x, y: this.y + this.height }
    ];
  }

  get edgesPath() {
    return `M${this.edges[0].x},${this.edges[0].y} L${this.edges[1].x},${this.edges[1].y} ${this.edges[2].x},${this.edges[2].y} ${this.edges[3].x},${this.edges[3].y}z`;
  }
}
