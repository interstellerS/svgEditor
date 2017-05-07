import React, { Component, PropTypes } from "react";
import SvgShape from "./SvgShape";
import { ORIENTATION } from "redux/constants/dndConstants";
import * as shapes from "d3-shape";
import * as d3 from "d3";

export default class Path extends SvgShape {
  constructor(options) {
    super(options);
  }

  get fill() {
    return this.get("fill");
  }

  set fill(value) {
    this.set("fill", value);
  }

  get points() {
    return this.get("points");
  }

  set points(value) {
    this.set("points", value);
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
    const line = shapes.line().x(p => p.x).y(p => p.y).curve(d3.curveCardinal);
    const d = line(this.points);

    return {
      d: d,
      stroke: this.stroke,
      strokeWidth: this.strokeWidth,
      fill: this.fill
    };
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
        name: this.name,
        cx: (this.x1 + this.x2) / 2,
        cy: this.y1
      },
      {
        orientation: ORIENTATION.EST,
        name: this.name,
        cx: this.x2,
        cy: (this.y1 + this.y2) / 2
      },
      {
        orientation: ORIENTATION.SUD,
        name: this.name,
        cx: (this.x1 + this.x2) / 2,
        cy: this.y2
      },
      {
        orientation: ORIENTATION.WEST,
        name: this.name,
        cx: this.x1,
        cy: (this.y1 + this.y2) / 2
      }
    ];
  }
  get edgesPath() {
    return `M${this.edges[0].x},${this.edges[0].y} L${this.edges[1].x},${this.edges[1].y} ${this.edges[2].x},${this.edges[2].y} ${this.edges[3].x},${this.edges[3].y}z`;
  }

  get calculatedWidth() {
    return Math.abs(this.x1 - this.x2);
  }

  get calculatedHeight() {
    return Math.abs(this.y1 - this.y2);
  }

  resize(orientation, delta) {
    let other, that;
    if (orientation == ORIENTATION.NORD) {
      if (this.y1 > this.y2) other = this.set("y2", this.y2 + delta.y);
      if (this.y2 > this.y1) other = this.set("y1", this.y1 + delta.y);
    }
    if (orientation == ORIENTATION.SUD) {
      if (this.y1 > this.y2) other = this.set("y1", this.y1 + delta.y);
      if (this.y2 > this.y1) other = this.set("y2", this.y2 + delta.y);
    }

    if (orientation == ORIENTATION.EST) {
      if (this.x1 > this.x2) other = this.set("x2", this.x2 + delta.x);
      if (this.x2 > this.x1) other = this.set("x1", this.x1 + delta.x);
    }

    if (orientation == ORIENTATION.WEST) {
      if (this.x1 > this.x2) other = this.set("x1", this.x1 + delta.x);
      if (this.x2 > this.x1) other = this.set("x2", this.x2 + delta.x);
    }
    return other;
  }

  translate(delta) {
    let step1 = this.set("x1", this.x1 + delta.x);
    let step2 = step1.set("x2", step1.x2 + delta.x);
    let step3 = step2.set("y1", step2.y1 + delta.y);
    let step4 = step3.set("y2", step3.y2 + delta.y);
    return step4;
  }
}
