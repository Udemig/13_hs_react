import actionTypes from "../actionTypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
};
const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    // Yüklenme Durumu
    case actionTypes.restaurantLoading:
      return { ...state, isLoading: true };
    // Hata Durumu
    case actionTypes.error:
      return { ...state, isLoading: false, error: action.payload };
    // Verinin başarıyla gelme durumu
    case actionTypes.restaurantSuccess:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
