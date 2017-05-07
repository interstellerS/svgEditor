import $ from "jquery";
import * as constants from "../constants/ActionTypes";
import * as builder from "units/shapeBuilder";
import * as colors from "data/colors";
import { ItemTypes } from "redux/constants/dndConstants";
import { ORIENTATION } from "redux/constants/dndConstants";
import { PathManager } from "helpers";

const pathManager = new PathManager();

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
    case "line":
      let line = builder.createLine(x, y, x + 100, y + 100);
      newSvg = state.svg.addChild(line);
      newState = update(state, { svg: newSvg });
      break;
    default:
  }
  return newState;
}

function createPath(state, points) {
  let createdPath = builder.createPath(points,);
  let newSvg = state.svg.addChild(createdPath);
  let newState = update(state, { svg: newSvg });
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
function resizeSvgItem(state, name, orientation, delta) {
  const svg = state.svg;
  let itemIndex = svg.children.findIndex(item => item["name"] === name);
  const newChildren = svg.children.update(itemIndex, function(item) {
    return item.resize(orientation, delta);
  });
  const newSvg = svg.update(svg => {
    return svg.set("children", newChildren);
  });
  let selectedItem = newSvg.children.get(itemIndex);
  return update(state, { svg: newSvg, selectedItem: selectedItem });
}

function dropSvgItem(state, monitor, component) {
  const name = monitor.getItem().data.name;
  const delta = monitor.getDifferenceFromInitialOffset();
  const svg = state.svg;
  let itemIndex = svg.children.findIndex(item => item["name"] === name);
  const newChildren = svg.children.update(itemIndex, function(item) {
    return item.translate(delta);
  });
  const newSvg = svg.update(svg => {
    return svg.set("children", newChildren);
  });
  let selectedItem = newSvg.children.get(itemIndex);
  return update(state, { svg: newSvg, selectedItem: selectedItem });
  return state2;
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

function dropToolItem(state, monitor, component) {
  const item = monitor.getItem();
  const { x, y } = monitor.getClientOffset();
  const svg = $("#svgContent")[0];
  const { top, left } = svg.getBoundingClientRect();
  return createElement(state, item.tool, x - left, y - top);
}
function dropEdgeItem(state, monitor, component) {
  const delta = monitor.getDifferenceFromInitialOffset();
  const item = monitor.getItem();
  let newState = resizeSvgItem(
    state,
    item.data.name,
    item.data.orientation,
    delta
  );
  return newState;
}

const initialState = {
  svg: builder.createSvgSample(),
  selectedItem: null,
  toolsLeft: ["select", "pencil", "line", "rectangle", "circle"],
  toolsTop: ["undo", "redo"],
  selectedToolLeft: "select",
  selectedColor: "#0693E3",
  selectedToolTop: "undo"
};

export default function shapes(state = initialState, action = {}) {
  switch (action.type) {
    case constants.SELECT_COLOR:
      return update(state, { selectedColor: action.color });
    case constants.SELECT_ITEM:
      return update(state, { selectedItem: action.item });
    case constants.SELECT_TOOL_LEFT:
      if (action.tool == "pencil") {
        pathManager.setup();
      }
      return update(state, { selectedToolLeft: action.tool });
    case constants.SELECT_TOOL_TOP:
      return update(state, { selectedToolTop: action.tool });
    case constants.DROP_ITEM:
      return drop(state, action.monitor, action.component);
    case constants.CREATE_PATH:
      return createPath(state, action.points);
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
