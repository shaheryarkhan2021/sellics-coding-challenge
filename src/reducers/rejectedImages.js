const rejectedImages = (state = [], action) => {
  switch (action.type) {
    case "REJECT_IMAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default rejectedImages;
