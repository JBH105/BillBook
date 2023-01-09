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
      dispatch({
        type: "ADD_STOCK",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: error.response,
      });
    }
  };
};
