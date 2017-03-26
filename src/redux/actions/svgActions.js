import { SELECT_ITEM, ATTR_CHANGE } from "../constants/ActionTypes";

export function selectItem(item) {
  return { type: SELECT_ITEM, item };
}

export function changeSvgDetail(name, attribute, value) {
  return { type: ATTR_CHANGE, name, attribute, value };
}
