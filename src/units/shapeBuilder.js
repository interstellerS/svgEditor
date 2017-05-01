import { List } from "immutable";
import { Circle, Rectangle, Line, Svg } from "units";
import * as shortid from "shortid";
import * as colors from "data/colors";

export function createSvgSample() {
  const initSvg = createSvg();
  const circle = createCircle(50, 50, 10, colors.COQUELICOT);
  const rectangle = createRectangle(300, 100, 100, 50, colors.ACACIA);
  const circle2 = createCircle(30, 20, 10, colors.LILAS);
  const line = createLine(200, 10, 10, 100, 10, colors.LILAS);

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

export function createCircle(x, y, r = 10, color = colors.COQUELICOT) {
  return new Circle({
    name: "circle" + "_" + shortid.generate(),
    cx: x,
    cy: y,
    r: r,
    fill: color,
    children: List([])
  });
}

export function createRectangle(
  x,
  y,
  width = 30,
  height = 30,
  color = colors.COQUELICOT
) {
  return new Rectangle({
    name: "rectangle" + "_" + shortid.generate(),
    x: x,
    y: y,
    width: width,
    height: height,
    fill: colors.ACACIA,
    children: List([])
  });
}

export function createLine(
  x1,
  y1,
  x2,
  y2,
  strokeWidth = 20,
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
