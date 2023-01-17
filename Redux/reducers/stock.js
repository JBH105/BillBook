const initialState = {
  stock: [],
  error: [],
  allstock: []
};

export const Stock = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STOCK":
      return {
        ...state,
        stock: action.payload,
      };
    case "ALL_PRODUCT":
      return {
        ...state,
        allstock: action.payload
      }
    case "DELETE_PRODUCT":
      return { ...state, stock: action.payload }
    case "SET_LOADING":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
