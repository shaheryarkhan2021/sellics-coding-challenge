const addedImages = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [...state, action.payload.url];
    default:
      return state;
  }
};
export default addedImages;
