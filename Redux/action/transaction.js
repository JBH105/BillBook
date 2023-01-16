import axios from "axios";
import { Router, useRouter } from "next/router";
import BASE_URL from "../../Api";
import URL from "../../URL";

export const addTransaction = (data) => {
  return async (dispatch) => {
    try {
      axios.post(`${URL}/addtransaction`, data, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "CREATE_TRANSACTION",
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
        type: "SET_LOADING",
        payload: err,
      });
    }
  };
};

export const VenderTransaction = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${URL}/venderTransaction/${data.id}?page=${data.page}`,
        {
          headers: {
            "x-access-token": sessionStorage.getItem("x-access-token"),
          },
        }
      );
      return dispatch({
        type: "VENDER_TRANSACTION",
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
        type: "SET_LOADING",
        payload: err,
      });
    }
  };
};

export const AllTransaction = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/alltransaction?page=${data}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "ALL_TRANSACTION",
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
        type: "SET_LOADING",
        payload: err,
      });
    }
  };
};
