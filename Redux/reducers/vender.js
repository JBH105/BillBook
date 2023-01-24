const initialState = {
  vender: [],
  error: [],
};

export const vender = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_VENDER":
      return {
        ...state,
        vender: action.payload,
      };
    case "All_VENDER":
      return { ...state, vender: action.payload };

    case "SET_LOADING":
      return { ...state, error: action.payload };

    default:
      return state;
      break;
  }
};
