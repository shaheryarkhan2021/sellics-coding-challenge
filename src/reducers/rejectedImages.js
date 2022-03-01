const rejectedImages = (state = [], action) => {
  switch (action.type) {
    case "REJECT_IMAGE":
      return [...state, action.payload.id];
    default:
      return state;
  }
};
export default rejectedImages;
