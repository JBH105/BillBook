
export const showToast = (data) => {
    return async (dispatch) => {
        return dispatch({
            type: "SHOW_TOAST",
            payload: data,

        });

    };
}
export const resetToast = (data) => {
    return async (dispatch) => {
        return dispatch({
            type: "RESET_TOAST",
            payload: data,

        });
    }
}

