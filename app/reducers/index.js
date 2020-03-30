import { combineReducers } from "redux";

import sortState from "./sortState";
import emptyRegions from "./emptyRegions";
import regionData from "./regionData";
import eth from "./eth";

const rootReducer = combineReducers({
  regionData,
  emptyRegions,
  sortState,
  eth
});

export default rootReducer;
