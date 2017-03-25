import { SELECT_ITEM } from "../constants/ActionTypes";

export function selectItem(item) {
  return { type: SELECT_ITEM, item };
}

export function changeSvgDetail(name, attribute, value) {
  return { type: SELECT_ITEM, name, attribute, value };
}
