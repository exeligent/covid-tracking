import {
  EDIT_ROW,
  DELETE_ROW,
  ADD_ROW,
  TOGGLE_DIRECTION,
  ETH_DATA
} from "../constants/ActionTypes";
import axios from "axios";

export function editRow(regionName, value) {
  return { type: EDIT_ROW, regionName, value };
}

export function deleteRow(regionName, code) {
  return { type: DELETE_ROW, regionName, code };
}

export function addRow(regionName, code, value) {
  return { type: ADD_ROW, regionName, code, value };
}

export function toggleDirection(newSortKey) {
  return { type: TOGGLE_DIRECTION, newSortKey };
}

export function getEthStatData(newData) {
  return { type: ETH_DATA, newData };
}
