import axios from "axios";
import { Router, useRouter } from "next/router";
import BASE_URL from "../../Api";
import URL from "../../URL";

export const addVender = (data) => {
  return async (dispatch) => {
    try {
      const response = axios.post(`${URL}/createvender`, data, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      dispatch({
        type: "CREATE_VENDER",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "SET_LOADING",
        payload: err,
      });
    }
  };
};

export const AllVender = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/allvender`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      dispatch({
        type: "All_VENDER",
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

export const DeleteVender = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${URL}/vender/${id}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      console.log("🚀 ~ file: vender.js:55 ~ return ~ response", response);
      dispatch({
        type: "DELETE_VENDER",
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
