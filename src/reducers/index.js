import addedImages from "./addedImages";
import rejectedImages from "./rejectedImages";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  addedImages: addedImages,
  rejectedImages: rejectedImages,
});

export default allReducers;
