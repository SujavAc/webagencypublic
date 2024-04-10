import { getUser } from "@/database/user/action";
import { AppDispatch, RootState } from "../reducer/rootReducer";

export const StoreLoginUser =
  (userId: string) => (dispatch: AppDispatch, getState: RootState) => {
    if (!userId) {
      return;
    }
    if (userId) {
      getUser(userId)
        .then((doc: any) => {
          return dispatch({
            type: "SET_USER_DATA",
            payload: doc.data(),
          });
        })
        .catch((error) => {
          return console.log(error);
        });
    }
  };
