const initialState = {
    message: null,
    time: 5000,
    id: null,
    type: null,
    handleClose: () => { return }
};

export const Toast = (state = initialState, action) => {
    console.log(action.type, "payload")
    switch (action.type) {
        case "SHOW_TOAST":
            return {
                ...state, ...action.payload
            };
        case "RESET_TOAST":
            return {
                ...state,
                message: null,
                time: 5000,
                id: null,
                type: null,
                handleClose: () => { return }
            }

        default:
            return state;
    }
};
