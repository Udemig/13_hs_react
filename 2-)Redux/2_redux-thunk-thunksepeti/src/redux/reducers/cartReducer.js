const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "A":
      return state;
    case "B":
      return state;
    case "C":
      return state;
    case "D":
      return state;

    default:
      return state;
  }
};

export default cartReducer;
