const initialState = {
  snackbarData: {},
};

const notistackReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "SET_NOTISTACKMESSAGE_DATA":
      return {
        ...state,
        snackbarData: { ...action.payload },
      };
    default:
      return state;
  }
};
export default notistackReducer;
