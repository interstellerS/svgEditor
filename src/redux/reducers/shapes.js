import { List } from "immutable";
import { Svg, Circle, Rectangle } from "units";

import * as colors from "data/colors";

export const CHANGE_COLOR = "CHANGE_COLOR";
export const CHANGE_RADIUS = "CHANGE_RADIUS";
export const CHANGE_TEXT = "CHANGE_TEXT";
export const CHANGE_X = "CHANGE_X";
export const CHANGE_Y = "CHANGE_Y";

const update = (state, mutations) => Object.assign({}, state, mutations);

/*
const initialState = {
    color: colors.ACACIA,
    radius: 50,
    text: '9',
    x: 100,
    y: 40,
};
*/

const initSvg = new Svg({ name: "svg", expanded: true, children: List([]) });
const circle = new Circle({
  name: "circle",
  cx: 50,
  cy: 40,
  r: 10,
  fill: colors.ACACIA,
  children: List([])
});
const rectangle = new Rectangle({
  name: "rectangle",
  x: 60,
  y: 10,
  width: 30,
  height: 30,
  fill: colors.ACACIA,
  children: List([])
});
const circle2 = new Circle({
  name: "circle",
  cx: 10,
  cy: 10,
  r: 10,
  fill: colors.LILAS,
  children: List([])
});
const svg = initSvg.addChild(circle).addChild(circle2).addChild(rectangle);

const initialState = {
  svg,
  selectedItem: circle2
};

export default function toolbar(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_COLOR:
      return update(state, { color: action.color });
    case CHANGE_RADIUS:
      return update(state, { radius: action.radius });
    case CHANGE_TEXT:
      return update(state, { text: action.text });
    case CHANGE_X:
      return update(state, { x: action.x });
    case CHANGE_Y:
      return update(state, { y: action.y });
    default:
      return state;
  }
}
