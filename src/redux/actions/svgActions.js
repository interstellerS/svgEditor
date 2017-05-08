import {
  SELECT_ITEM,
  ATTR_CHANGE,
  SELECT_TOOL_LEFT,
  SELECT_TOOL_TOP,
  SELECT_COLOR,
  DROP_ITEM,
  CREATE_PATH,
  UPDATE_PATH,
  CREATE_ITEM
} from "../constants/ActionTypes";

export function selectItem(item) {
  return { type: SELECT_ITEM, item };
}

export function changeSvgDetail(name, attribute, value) {
  return { type: ATTR_CHANGE, name, attribute, value };
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
export function createSvgPath(startPoint) {
  return { type: CREATE_PATH, startPoint };
}
export function updateSvgPath(point) {
  return { type: UPDATE_PATH, point };
}
