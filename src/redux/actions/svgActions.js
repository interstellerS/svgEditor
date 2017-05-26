import {
  SELECT_ITEM,
  ATTR_CHANGE,
  SELECT_TOOL_LEFT,
  SELECT_TOOL_TOP,
  SELECT_COLOR,
  DROP_ITEM,
  CREATE_SHAPE,
  UPDATE_SHAPE,
  CHANGE_ALIGN,
  CREATE_ITEM
} from "../constants/ActionTypes";

export function selectItem(item) {
  return { type: SELECT_ITEM, item };
}

export function changeSvgDetail(name, attribute, value) {
  return { type: ATTR_CHANGE, name, attribute, value };
}
export function changeSvgAlign(name, value) {
  return { type: CHANGE_ALIGN, name, value };
}

export function selectToolLeft(tool) {
  return { type: SELECT_TOOL_LEFT, tool };
}

export function selectToolTop(tool) {
  return { type: SELECT_TOOL_TOP, tool };
}
export function createSvgElement(tool, x, y) {
  return { type: CREATE_ITEM, tool, x, y };
}
export function dropItem(monitor, component) {
  return { type: DROP_ITEM, monitor, component };
}
export function selectColor(color) {
  return { type: SELECT_COLOR, color };
}
export function createSvgShape(startPoint) {
  return { type: CREATE_SHAPE, startPoint };
}
export function updateSvgShape(point) {
  return { type: UPDATE_SHAPE, point };
}
