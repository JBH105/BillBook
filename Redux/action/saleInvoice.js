import axios from "axios";
import URL from "../../URL";

export const AddInvoice = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/createinvoice`, data, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "CREATE_INVOICE",
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

export const AllInvoice = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/allinvoice?page=${data}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "ALL_INVOICE",
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
