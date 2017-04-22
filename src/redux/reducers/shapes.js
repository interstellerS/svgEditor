import { List } from "immutable";
import * as shortid from "shortid";
import { Svg, Circle, Rectangle, Line } from "units";
import * as constants from "../constants/ActionTypes";
import * as colors from "data/colors";

const update = (state, mutations) => Object.assign({}, state, mutations);

const updateAttribute = function updateSvgAttribute(
  state,
  name,
  attribute,
  value
) {
  const svg = state.svg;
  let itemIndex = svg.children.findIndex(item => item["name"] === name);
  const newChildren = svg.children.update(itemIndex, function(item) {
    return item.set(attribute, value);
  });
  const newSvg = svg.update(svg => {
    return svg.set("children", newChildren);
  });
  let selectedItem = newSvg.children.get(itemIndex);
  return update(state, { svg: newSvg, selectedItem: selectedItem });
};

const initSvg = new Svg({ name: "svg", expanded: true, children: List([]) });
const circle = new Circle({
  name: "circle" + "_" + shortid.generate(),
  cx: 50,
  cy: 40,
  r: 10,
  fill: colors.COQUELICOT,
  children: List([])
});
const rectangle = new Rectangle({
  name: "rectangle" + "_" + shortid.generate(),
  x: 60,
  y: 10,
  width: 30,
  height: 30,
  fill: colors.ACACIA,
  children: List([])
});
const circle2 = new Circle({
  name: "circle" + "_" + shortid.generate(),
  cx: 10,
  cy: 10,
  r: 10,
  fill: colors.LILAS,
  children: List([])
});

const line = new Line({
  name: "line" + "_" + shortid.generate(),
  x1: 200,
  y1: 10,
  x2: 10,
  y2: 100,
  strokeWidth: 10,
  stroke: colors.PARME,
  children: List([])
});
const svg = initSvg
  .addChild(circle)
  .addChild(circle2)
  .addChild(rectangle)
  .addChild(line);

const initialState = {
  svg,
  selectedItem: circle2,
  toolsLeft: ["select", "pencil", "line", "rectangle", "circle"],
  toolsTop: ["undo", "redo"],
  selectedToolLeft: "select",
  selectedToolTop: "undo"
};

export default function shapes(state = initialState, action = {}) {
  switch (action.type) {
    case constants.SELECT_ITEM:
      return update(state, { selectedItem: action.item });
    case constants.SELECT_TOOL_LEFT:
      return update(state, { selectedToolLeft: action.tool });
    case constants.SELECT_TOOL_TOP:
      return update(state, { selectedToolTop: action.tool });
    case constants.ATTR_CHANGE:
      return updateAttribute(
        state,
        action.name,
        action.attribute,
        action.value
      );
    default:
      return state;
  }
}
