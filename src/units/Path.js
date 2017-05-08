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
    const d = line(this.points.toArray());

    return {
      d: d,
      stroke: this.stroke,
      strokeWidth: this.strokeWidth,
      fill: this.fill
    };
  }
  get cords() {
    const points = this.points.toArray();
    const minX = Math.min.apply(Math, points.map(o => o.x));
    const minY = Math.min.apply(Math, points.map(o => o.y));
    const maxX = Math.max.apply(Math, points.map(o => o.x));
    const maxY = Math.max.apply(Math, points.map(o => o.y));

    return {
      minX,
      minY,
      maxX,
      maxY
    };
  }

  get edges() {
    const cords = this.cords;
    return [
      { x: cords.minX, y: cords.minY },
      { x: cords.maxX, y: cords.minY },
      { x: cords.maxX, y: cords.maxY },
      { x: cords.minX, y: cords.maxY }
    ];
  }

  get circles() {
    const cords = this.cords;
    return [
      {
        orientation: ORIENTATION.NORD_WEST,
        cx: (cords.minX + cords.maxX) / 2,
        cy: minY
      },
      {
        orientation: ORIENTATION.NORD,
        cx: cords.maxX,
        cy: (cords.minY + cords.maxY) / 2
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
    const cords = this.cords;
    return [
      {
        orientation: ORIENTATION.NORD,
        name: this.name,
        cx: (cords.minX + cords.maxX) / 2,
        cy: cords.minY
      },
      {
        orientation: ORIENTATION.EST,
        name: this.name,
        cx: cords.maxX,
        cy: (cords.minY + cords.maxY) / 2
      },
      {
        orientation: ORIENTATION.SUD,
        name: this.name,
        cx: (cords.minX + cords.maxX) / 2,
        cy: cords.maxY
      },
      {
        orientation: ORIENTATION.WEST,
        name: this.name,
        cx: cords.minX,
        cy: (cords.minY + cords.maxY) / 2
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

  setPoints(value) {
    return this.set("points", value);
  }

  updateShape(point) {
    const newPoints = this.points.push(point);
    const other = this.setPoints(newPoints);
    return other;
  }

  get calculatedWidth() {
    const cords = this.cords;
    return Math.abs(cords.minX - cords.maxX);
  }

  get calculatedHeight() {
    const cords = this.cords;
    return Math.abs(cords.minY - cords.maxY);
  }

  translate(delta) {
    const newPoints = this.points.map(function mapPoint(point) {
      return {
        x: point.x + delta.x,
        y: point.y + delta.y
      };
    });

    const other = this.setPoints(newPoints);
    return other;
  }
}
