import {
  EDIT_ROW,
  DELETE_ROW,
  ADD_ROW,
  ETH_DATA
} from "../constants/ActionTypes";
import objectAssign from "object-assign";

export default function regionData(state = [], action) {
  switch (action.type) {
    case ETH_DATA:
     
      return [
        {
          ethData: action.newData
        },
        ...state
      ];

    default:
      return state;
  }
}
