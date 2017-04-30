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

  get stroke() {
    return this.get("stroke");
  }

  set stroke(value) {
    this.set("stroke", value);
  }

  get type() {
    return "Line";
  }

  get domProps() {
    let { x1, x2, y1, y2, stroke, strokeWidth } = this.toJS();
    return { x1, x2, y1, y2, stroke, strokeWidth };
  }

  get edges() {
    return [
      { x: this.x1, y: this.y2 },
      { x: this.x2, y: this.y2 },
      { x: this.x2, y: this.y1 },
      { x: this.x1, y: this.y1 }
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
        r: 5,
        width: this.width,
        height: this.height,
        name: this.name,
        fill: "#22C",
        cx: this.x + this.width / 2,
        cy: this.y
      },
      {
        orientation: ORIENTATION.EST,
        r: 5,
        width: this.width,
        height: this.height,
        name: this.name,
        fill: "#22C",
        cx: this.x + this.width,
        cy: this.y + this.height / 2
      },
      {
        orientation: ORIENTATION.SUD,
        r: 5,
        width: this.width,
        height: this.height,
        name: this.name,
        fill: "#22C",
        cx: this.x + this.width / 2,
        cy: this.y + this.height
      },
      {
        orientation: ORIENTATION.WEST,
        r: 5,
        width: this.width,
        height: this.height,
        name: this.name,
        fill: "#22C",
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
}
