import { List } from "immutable";
import { Circle, Rectangle, Line, Svg, Path } from "units";
import * as shortid from "shortid";
import * as colors from "data/colors";

const line = createLine(900, 100, 10, 300, 10, colors.LILAS);

export function createSvgSample() {
  const initSvg = createSvg();
  const circle = createCircle(400, 300, 150, colors.COQUELICOT);
  const rectangle = createRectangle(350, 100, 200, 300, colors.ACACIA);
  const circle2 = createCircle(800, 260, 100, colors.COBALT, 2, colors.ROSE);

  const svg = initSvg
    .addChild(circle)
    .addChild(circle2)
    .addChild(rectangle)
    .addChild(line);

  return svg;
}
export function createSvg() {
  return new Svg({ name: "svg", expanded: true, children: List([]) });
}

export function createCircle(
  x,
  y,
  r = 5,
  color = colors.COQUELICOT,
  strokeWidth = 5,
  stroke = colors.PARME
) {
  return new Circle({
    name: "circle" + "_" + shortid.generate(),
    cx: x,
    cy: y,
    r: r,
    fill: color,
    strokeWidth: strokeWidth,
    stroke: stroke,
    children: List([])
  });
}

export function createRectangle(
  x,
  y,
  width = 30,
  height = 30,
  color = colors.COQUELICOT,
  strokeWidth = 5,
  stroke = colors.PARME
) {
  return new Rectangle({
    name: "rectangle" + "_" + shortid.generate(),
    x: x,
    y: y,
    width: width,
    height: height,
    fill: color,
    strokeWidth: strokeWidth,
    stroke: stroke,
    children: List([])
  });
}

export function createLine(
  x1,
  y1,
  x2,
  y2,
  strokeWidth = 5,
  stroke = colors.COQUELICOT
) {
  return new Line({
    name: "line" + "_" + shortid.generate(),
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    strokeWidth: strokeWidth,
    stroke: stroke,
    children: List([])
  });
}
export function createPath(
  startPoint,
  strokeWidth = 5,
  stroke = colors.COQUELICOT
) {
  return new Path({
    name: "path" + "_" + shortid.generate(),
    points: List([startPoint]),
    strokeWidth: strokeWidth,
    stroke: stroke,
    fill: "none",
    children: List([])
  });
}
