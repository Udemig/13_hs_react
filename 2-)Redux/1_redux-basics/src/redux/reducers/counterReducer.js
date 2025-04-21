const initialState = {
  count: 0,
  name: "Samet",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTTIR":
      return { ...state, count: state.count + 1 };
    case "AZALT":
      return { ...state, count: state.count - 1 };
    case "SIFIRLA":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
