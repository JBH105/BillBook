// import EcommerceApis from "../../apis/EcommerceApis";

import axios from "axios";
import BASE_URL from "../../Api";
import URL from "../../URL";

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const response = await BASE_URL.post("create_user", data);
      dispatch({
        type: "CREATE_USER",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };
};

export const logIn = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/login`, data);
      sessionStorage.setItem("x-access-token", response.data.user.token);
      return dispatch({
        type: "LOGIN_USER",
        payload: response.data.user,
      });
    } catch (err) {
      return dispatch({
        type: "SET_LOADING",
        payload: response,
      });
    }
  };
};
