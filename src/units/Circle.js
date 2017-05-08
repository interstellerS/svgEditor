import React, { Component, PropTypes } from "react";
import SvgShape from "./SvgShape";
import { ORIENTATION } from "redux/constants/dndConstants";

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

  get circles() {
    return [
      {
        orientation: ORIENTATION.NORD_WEST,
        fill: "#22C",
        r: 5,
        cx: this.cx - this.r,
        cy: this.cy - this.r
      },
      {
        orientation: ORIENTATION.NORD,
        fill: "#22C",
        r: 5,
        cx: this.cx,
        cy: this.cy - this.r
      },
      {
        orientation: ORIENTATION.NORD_EST,
        fill: "#22C",
        r: 5,
        cx: this.cx + this.r,
        cy: this.cy - this.r
      },
      {
        orientation: ORIENTATION.EST,
        fill: "#22C",
        r: 5,
        cx: this.cx + this.r,
        cy: this.cy
      },
      {
        orientation: ORIENTATION.SUD_EST,
        fill: "#22C",
        r: 5,
        cx: this.cx + this.r,
        cy: this.cy + this.r
      },
      {
        orientation: ORIENTATION.SUD,
        fill: "#22C",
        r: 5,
        cx: this.cx,
        cy: this.cy + this.r
      },
      {
        orientation: ORIENTATION.SUD_WEST,
        fill: "#22C",
        r: 5,
        cx: this.cx,
        cy: this.cy + this.r
      },
      {
        orientation: ORIENTATION.WEST,
        fill: "#22C",
        r: 5,
        cx: this.cx - this.r,
        cy: this.cy + this.r
      },
      { orientation: "", fill: "#22C", r: 5, cx: this.cx - this.r, cy: this.cy }
    ];
  }
  get circlesMins() {
    return [
      {
        orientation: ORIENTATION.NORD,
        name: this.name,
        radius: this.r,
        cx: this.cx,
        cy: this.cy - this.r
      },
      {
        orientation: ORIENTATION.EST,
        name: this.name,
        radius: this.r,
        cx: this.cx + this.r,
        cy: this.cy
      },
      {
        orientation: ORIENTATION.SUD,
        name: this.name,
        radius: this.r,
        cx: this.cx,
        cy: this.cy + this.r
      },
      {
        orientation: ORIENTATION.WEST,
        name: this.name,
        radius: this.r,
        cx: this.cx - this.r,
        cy: this.cy
      }
    ];
  }

  get edgesPath() {
    return `M${this.edges[0].x},${this.edges[0].y} L${this.edges[1].x},${this.edges[1].y} ${this.edges[2].x},${this.edges[2].y} ${this.edges[3].x},${this.edges[3].y}z`;
  }
  get calculatedWidth() {
    return this.r * 2;
  }

  get calculatedHeight() {
    return this.r * 2;
  }

  resize(orientation, delta) {
    let other, that;
    if (orientation == ORIENTATION.NORD) {
      other = this.set("r", this.r - delta.y);
    }
    if (orientation == ORIENTATION.WEST) {
      other = this.set("r", this.r - delta.x);
    }
    if (orientation == ORIENTATION.SUD) {
      other = this.set("r", this.r + delta.y);
    }
    if (orientation == ORIENTATION.EST) {
      other = this.set("r", this.r + delta.x);
    }
    return other;
  }

  translate(delta) {
    let that = this.set("cx", this.cx + delta.x);
    let other = that.set("cy", that.cy + delta.y);
    return other;
  }

  updateShape(point) {
    const distance = Math.sqrt(
      Math.pow(this.cx - point.x, 2) + Math.pow(this.cy - point.y, 2)
    );
    let step1 = this.set("r", distance);
    return step1;
  }
}
