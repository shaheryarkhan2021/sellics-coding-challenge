import * as types from "./actionTypes";
const rejectImage = (payload) => {
  return {
    type: types.REJECT_IMAGE,
    payload
  };
};
export default rejectImage;
