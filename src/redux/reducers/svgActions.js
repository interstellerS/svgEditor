import { Map } from "immutable";

import * as constants from "../constants/ActionTypes";

export default function svgActions(state = Map(), action) {
  switch (action.type) {
    case constants.ATTR_CHANGE:
      // TODO change this
      return state.set("selectedItem", action.item);

    default:
      return state;
  }
}
