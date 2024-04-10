const initialState = {
  userData: {},
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action?.payload,
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };
    case "REMOVE_USER_DATA":
      return {
        userData: {},
      };
    default:
      return state;
  }
};
export default userReducer;
