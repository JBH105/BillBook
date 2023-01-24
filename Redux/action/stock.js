import axios from "axios";
import URL from "../../URL";

export const AddProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/addproduct`, data, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "ADD_STOCK",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "SET_LOADING",
        payload: error.response,
      });
    }
  };
};

export const AllProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/allproduct?page=${data}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      dispatch({
        type: "ALL_PRODUCT",
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

export const DeleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${URL}/deleteproduct/${id}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "DELETE_PRODUCT",
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