import React, { Component, PropTypes } from "react";
import SvgShape from "./SvgShape";
import { ORIENTATION } from "redux/constants/dndConstants";
import { ALIGN } from "redux/constants/dndConstants";

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

  get stroke() {
    return this.get("stroke");
  }

  set stroke(value) {
    this.set("stroke", value);
  }

  get type() {
    return "Rectangle";
  }

  get domProps() {
    let { x, y, width, height, fill, stroke, strokeWidth } = this.toJS();
    return { x, y, width, height, fill, stroke, strokeWidth };
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

  get circles() {
    return [
      {
        orientation: ORIENTATION.NORD_WEST,
        r: 5,
        fill: "#22C",
        cx: this.x,
        cy: this.y
      },
      {
        orientation: ORIENTATION.NORD,
        r: 5,
        fill: "#22C",
        cx: this.x + this.width / 2,
        cy: this.y
      },
      {
        orientation: ORIENTATION.NORD_EST,
        r: 5,
        fill: "#22C",
        cx: this.x + this.width,
        cy: this.y
      },
      {
        orientation: ORIENTATION.EST,
        r: 5,
        fill: "#22C",
        cx: this.x + this.width,
        cy: this.y + this.height / 2
      },
      {
        orientation: ORIENTATION.SUD_EST,
        r: 5,
        fill: "#22C",
        cx: this.x + this.width,
        cy: this.y + this.height
      },
      {
        orientation: ORIENTATION.SUD,
        r: 5,
        fill: "#22C",
        cx: this.x + this.width / 2,
        cy: this.y + this.height
      },
      {
        orientation: ORIENTATION.SUD_WEST,
        r: 5,
        fill: "#22C",
        cx: this.x,
        cy: this.y + this.height
      },
      {
        orientation: ORIENTATION.WEST,
        r: 5,
        fill: "#22C",
        cx: this.x,
        cy: this.y + this.height / 2
      }
    ];
  }
  get circlesMins() {
    return [
      {
        orientation: ORIENTATION.NORD,
        width: this.width,
        height: this.height,
        name: this.name,
        cx: this.x + this.width / 2,
        cy: this.y
      },
      {
        orientation: ORIENTATION.EST,
        width: this.width,
        height: this.height,
        name: this.name,
        cx: this.x + this.width,
        cy: this.y + this.height / 2
      },
      {
        orientation: ORIENTATION.SUD,
        width: this.width,
        height: this.height,
        name: this.name,
        cx: this.x + this.width / 2,
        cy: this.y + this.height
      },
      {
        orientation: ORIENTATION.WEST,
        width: this.width,
        height: this.height,
        name: this.name,
        cx: this.x,
        cy: this.y + this.height / 2
      }
    ];
  }
  get edgesPath() {
    return `M${this.edges[0].x},${this.edges[0].y} L${this.edges[1].x},${this.edges[1].y} ${this.edges[2].x},${this.edges[2].y} ${this.edges[3].x},${this.edges[3].y}z`;
  }

  get calculatedWidth() {
    return this.width;
  }

  get calculatedHeight() {
    return this.height;
  }

  resize(orientation, delta) {
    let other, that;
    if (orientation == ORIENTATION.NORD) {
      that = this.set("y", this.y + delta.y);
      other = that.set("height", that.height - delta.y);
    }
    if (orientation == ORIENTATION.WEST) {
      that = this.set("x", this.x + delta.x);
      other = that.set("width", that.width - delta.x);
    }
    if (orientation == ORIENTATION.SUD) {
      other = this.set("height", this.height + delta.y);
    }
    if (orientation == ORIENTATION.EST) {
      other = this.set("width", this.width + delta.x);
    }
    return other;
  }
  changeAlign(value, width, height) {
    let that;
    switch (value) {
      case ALIGN.LEFT:
        that = this.set("x", 0);
        break;
      case ALIGN.CENTER:
        that = this.set("x", width / 2 - this.width / 2);
        break;
      case ALIGN.RIGHT:
        that = this.set("x", width - this.width);
        break;
      case ALIGN.TOP:
        that = this.set("y", 0);
        break;
      case ALIGN.MIDDLE:
        that = this.set("y", height / 2 - this.height / 2);
        break;
      case ALIGN.BOTTOM:
        that = this.set("y", height - this.height);
        break;
      default:
    }
    return that;
  }

  translate(delta) {
    let that = this.set("x", this.x + delta.x);
    let other = that.set("y", that.y + delta.y);
    return other;
  }

  updateShape(point) {
    let step1 = this.set("width", Math.abs(this.x - point.x));
    let step2 = step1.set("height", Math.abs(this.y - point.y));
    return step2;
  }
}
