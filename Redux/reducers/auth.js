const initialState = {
  user: [],
  allProduct: [],
  category: [],
  getCategory: [],
  deleteToken: [],
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      // console.log(action.payload ,"action.payloadaction.payloadaction.payloadaction.payload")
      return { ...state, user: action.payload };
    default:
      return state;
    // break;
  }
};

export const logIn = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return { ...state, user: action.payload };

    default:
      return state;
      break;
  }
};

export const allProduct = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCT":
      // console.log(action.payload ,"action.payloadaction.payloadaction.payloadaction.payload")

      return { ...state, allProduct: action.payload };
    default:
      return state;
    // break;
  }
};

export const addCategory = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      // console.log(action.payload ,"action.payloadaction.payloadaction.payloadaction.payload")

      return { ...state, category: action.payload };
    default:
      return state;
    // break;
  }
};

export const getMainCategory = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      // console.log(action.payload ,"action.payloadaction.payloadaction.payloadaction.payload")

      return { ...state, getCategory: action.payload };
    default:
      return state;
    // break;
  }
};

export default productReducers;
