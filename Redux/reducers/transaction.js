const initialState = {
  Transaction: [],
  error: [],
  VenderTransaction: [],
  AllTransaction: [],
};

export const transaction = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TRANSACTION":
      return {
        ...state,
        Transaction: action.payload,
      };
    case "VENDER_TRANSACTION":
      return {
        ...state,
        VenderTransaction: action.payload,
      };
    case "ALL_TRANSACTION":
      return {
        ...state,
        AllTransaction: action.payload,
      };
    case "SET_LOADING":
      return { ...state, error: action.payload };

    default:
      return state;
      break;
  }
};
