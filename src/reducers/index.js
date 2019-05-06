export default (state = { place: "hopge" }, action) => {
  switch (action.type) {
    case "CHANGE_PLACE":
      return Object.assign({}, state, { place: action.place });
    default:
      return state;
  }
};
