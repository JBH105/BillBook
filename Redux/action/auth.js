// import EcommerceApis from "../../apis/EcommerceApis";

import axios from "axios";
import { Router, useRouter } from "next/router";
import BASE_URL from "../../Api";
import URL from "../../URL";

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const response = await BASE_URL.post("create_user", data);
      return dispatch({
        type: "CREATE_USER",
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
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
      sessionStorage.setItem("x-access-token", response.data.token);
      console.log("🚀 ~ file: auth.js:30 ~ return ~ response", response);
      return dispatch({
        type: "LOGIN_USER",
        payload: response.data,
      });
    } catch (err) {
      console.log("🚀 ~ file: auth.js:36 ~ return ~ err", err);
      return dispatch({
        type: "SET_LOADING",
        payload: err.response.data,
      });
    }
  };
};
export const userSignUpDetails = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/signup`, data);
      return dispatch({
        type: "SIGNUP_USER",
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
        type: "SET_LOADING",
        payload: err.response.data,
      });
    }
  };
};

export const createUserDetails = (data) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "USER_DETAILS",
        payload: data,
      });
    } catch (err) {
      return dispatch({
        type: "SET_LOADING",
        payload: err,
      });
    }
  };
};
