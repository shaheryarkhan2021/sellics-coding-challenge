const rejectedImages = (state = [], action) => {
  switch (action.type) {
    case "REJECT_IMAGE":
      return [...state, 1];
    default:
      return state;
  }
};
export default rejectedImages;
