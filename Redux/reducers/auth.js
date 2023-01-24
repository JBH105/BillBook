const initialState = {
  user: [],
  allProduct: [],
  category: [],
  getCategory: [],
  deleteToken: [],
  userSignupData: [],
  error: [],
  userDetails: [],
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
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
    case "SIGNUP_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return { ...state, error: action.payload };

    default:
      return state;
      break;
  }
};

export const userDetails = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      return { ...state, userDetails: action.payload };
    case "SET_LOADING":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const allProduct = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCT":

      return { ...state, allProduct: action.payload };
    default:
      return state;
    // break;
  }
};

export const addCategory = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":

      return { ...state, category: action.payload };
    default:
      return state;
    // break;
  }
};

export const getMainCategory = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return { ...state, getCategory: action.payload };
    default:
      return state;
    // break;
  }
};
export const getUserSignupData = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      return { ...state, userSignupData: action.payload };
    default:
      return state;
      break;
  }
};
export default productReducers;
