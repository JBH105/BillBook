import axios from "axios";
import { Router, useRouter } from "next/router";
import BASE_URL from "../../Api";
import URL from "../../URL";

export const AddProduct = (data) => {
  console.log("🚀 ~ file: stock.js:7 ~ AddProduct ~ data", data);
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