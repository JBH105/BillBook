import axios from "axios";
import URL from "../../URL";

export const addVender = (data) => {
  return async (dispatch) => {
    try {
      const response = axios.post(`${URL}/createvender`, data, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "CREATE_VENDER",
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

export const AllVender = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/allvender`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "All_VENDER",
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

export const DeleteVender = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${URL}/vender/${id}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      });
      return dispatch({
        type: "DELETE_VENDER",
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
