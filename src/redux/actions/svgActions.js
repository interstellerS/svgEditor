import { SELECT_ITEM } from "../constants/ActionTypes";

export function selectItem(item) {
  return { type: SELECT_ITEM, item };
}
