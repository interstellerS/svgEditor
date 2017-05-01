import $ from "jquery";
import * as constants from "../constants/ActionTypes";
import * as builder from "units/shapeBuilder";
import * as colors from "data/colors";
import { ItemTypes } from "redux/constants/dndConstants";
import { ORIENTATION } from "redux/constants/dndConstants";

const update = (state, mutations) => Object.assign({}, state, mutations);

function createElement(state, tool, x, y) {
  let newSvg;
  let newState;
  switch (tool) {
    case "circle":
      let createdCircle = builder.createCircle(x, y);
      newSvg = state.svg.addChild(createdCircle);
      newState = update(state, { svg: newSvg });
      break;
    case "rectangle":
      let rectangle = builder.createRectangle(x, y);
      newSvg = state.svg.addChild(rectangle);
      newState = update(state, { svg: newSvg });
      break;
    default:
  }
  return newState;
}

function updateAttribute(state, name, attribute, value) {
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
}

function drop(state, monitor, component) {
  const item = monitor.getItem();
  let newState;
  switch (item.type) {
    case ItemTypes.SVG_ITEM:
      newState = dropSvgItem(state, monitor, component);
      break;
    case ItemTypes.TOOL_ITEM:
      newState = dropToolItem(state, monitor, component);
      break;
    case ItemTypes.EDGE_ITEM:
      newState = dropEdgeItem(state, monitor, component);
      break;
    default:
  }
  return newState;
}

function dropSvgItem(state, monitor, component) {
  const item = monitor.getItem();
  const delta = monitor.getDifferenceFromInitialOffset();
  let state1 = updateAttribute(
    state,
    item.data.name,
    item.data.xAttributre,
    item.data.x + delta.x
  );
  let state2 = updateAttribute(
    state1,
    item.data.name,
    item.data.yAttributre,
    item.data.y + delta.y
  );
  return state2;
}
function dropToolItem(state, monitor, component) {
  const item = monitor.getItem();
  const { x, y } = monitor.getClientOffset();
  const svg = $("#svgContent")[0];
  const { top, left } = svg.getBoundingClientRect();
  return createElement(state, item.tool, x - left, y - top);
}
function dropEdgeItem(state, monitor, component) {
  const item = monitor.getItem();
  let newState;
  const delta = monitor.getDifferenceFromInitialOffset();
  if (item.data.name.indexOf("circle") > -1)
    newState = handleCircleEdge(state, item, delta);
  if (item.data.name.indexOf("rectangle") > -1)
    newState = handleRectangleEdge(state, item, delta);

  return newState;
}

function handleCircleEdge(state, item, delta) {
  const diff = [ORIENTATION.NORD, ORIENTATION.SUD].indexOf(
    item.data.orientation
  ) > -1
    ? delta.y
    : delta.x;
  let newState = updateAttribute(
    state,
    item.data.name,
    "r",
    item.data.radius + diff
  );
  return newState;
}
function handleRectangleEdge(state, item, delta) {
  let newState;
  if ([ORIENTATION.NORD, ORIENTATION.SUD].indexOf(item.data.orientation) > -1)
    newState = updateAttribute(
      state,
      item.data.name,
      "height",
      item.data.height + delta.y
    );
  if ([ORIENTATION.EST, ORIENTATION.WEST].indexOf(item.data.orientation) > -1)
    newState = updateAttribute(
      state,
      item.data.name,
      "width",
      item.data.width + delta.x
    );

  return newState;
}
const initialState = {
  svg: builder.createSvgSample(),
  selectedItem: null,
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
    case constants.DROP_ITEM:
      return drop(state, action.monitor, action.component);
    default:
      return state;
  }
}
