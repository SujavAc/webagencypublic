import { VariantType } from "notistack";
import { AppDispatch, RootState } from "../reducer/rootReducer";

export interface notiStack {
  message?: string;
  variant?: VariantType | undefined;
}

export interface progressError {
  loading?: boolean;
}

export const AddNotistackmessage =
  (data: notiStack) => (dispatch: AppDispatch, getState: RootState) => {
    return dispatch({ type: "SET_SNACKBAR_DATA", payload: data });
  };
