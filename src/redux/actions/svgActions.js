import {
  SELECT_ITEM,
  ATTR_CHANGE,
  SELECT_TOOL_LEFT,
  SELECT_TOOL_TOP,
  DROP_ITEM,
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
