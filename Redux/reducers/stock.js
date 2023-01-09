const initialState = {
  stock: [],
  error: [],
};

export const Stock = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STOCK":
      return {
        ...state,
        stock: action.payload,
      };
    case "SET_LOADING":
      return { ...state, stock: action.payload };

    default:
      return state;
  }
};
