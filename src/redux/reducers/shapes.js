import * as constants from "../constants/ActionTypes";
import * as builder from "units/shapeBuilder";
import * as colors from "data/colors";

const update = (state, mutations) => Object.assign({}, state, mutations);

const create = function createElement(state, element) {
  let newSvg;
  switch (element.tool) {
    case "circle":
      let createdCircle = builder.createCircle(element.x, element.y);
      newSvg = state.svg.addChild(createdCircle);
      return update(state, { svg: newSvg });
      break;
    case "rectangle":
      let rectangle = builder.createRectangle(element.x, element.y);
      newSvg = state.svg.addChild(rectangle);
      return update(state, { svg: newSvg });
      break;
    default:
  }
};

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

const initSvg = builder.createSvg();
const circle = builder.createCircle(50, 50, 10, colors.COQUELICOT);
const rectangle = builder.createRectangle(300, 100, 100, 50, colors.ACACIA);
const circle2 = builder.createCircle(30, 20, 10, colors.LILAS);
const line = builder.createLine(200, 10, 10, 100, colors.LILAS);

const svg = initSvg
  .addChild(circle)
  .addChild(circle2)
  .addChild(rectangle)
  .addChild(line);

const initialState = {
  svg,
  selectedItem: rectangle,
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
    case constants.CREATE_ITEM:
      return create(state, {
        tool: action.tool,
        x: action.x,
        y: action.y
      });
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
