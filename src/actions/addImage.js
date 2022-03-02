import * as types from "./actionTypes";
const addImage = (payload) => {
  return {
    type: types.ADD_IMAGE,
    payload,
  };
};
export default addImage;
