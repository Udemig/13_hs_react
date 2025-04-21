const counterReducer = (state, action) => {
  switch (action.type) {
    case "ARTTIR":
      return state + 1;
    case "AZALT":
      return state - 1;
    case "SIFIRLA":
      return 0;
    case "DEĞERATA":
      return action.payload;
    default:
      return state;
  }
};

export default counterReducer;
