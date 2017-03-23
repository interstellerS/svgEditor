import { Map } from "immutable";

import * as constants from "../constants/ActionTypes";

export default function svgActions(state = Map(), action) {
  switch (action.type) {
    case constants.SELECT_ITEM:
      return state.set("selectedItem", action.item);

    default:
      return state;
  }
}
