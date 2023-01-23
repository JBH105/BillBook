const initialState = {
  invoice: [],
  error: [],
  allstock: [],
  allInvoice: [],
};

export const Invoice = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_INVOICE":
      return {
        ...state,
        invoice: action.payload,
      };
    case "ALL_INVOICE":
      return {
        ...state,
        allInvoice: action.payload,
      };
    case "SET_LOADING":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
