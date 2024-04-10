import { VariantType } from "notistack";
import { AppDispatch, RootState } from "../reducer/rootReducer";
import { getData, loadMoreData } from "@/database/paginateData";
import addDocument, {
  deleteDocument,
  updateDocument,
} from "@/database/operation/action";

export interface notiStack {
  message?: string;
  variant?: VariantType | undefined;
}

export interface progressError {
  loading?: boolean;
}

export const addContactusData =
  (dbCollection: string, ContactusData: any) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !ContactusData) {
      return;
    }
    const { error } = await addDocument(dbCollection, ContactusData);
    if (error) {
      console.log(error);
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Something went wrong", variant: "error" },
      });
      return dispatch({
        type: "ERROR_ON_CONTACT_US_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Added Successfully", variant: "success" },
      });
      return dispatch({
        type: "ADD_CONTACT_US_DATA",
        payload: ContactusData,
      });
    }
  };

export const getContactusData =
  (dbCollection: string, limit: number) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !limit) {
      return;
    }
    const { data, error, hasMore, lastVisibleDoc } = await getData(
      dbCollection,
      limit,
    );
    if (error) {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: {
          message: "Something went wrong, please try again",
          variant: "error",
        },
      });
      return dispatch({
        type: "ERROR_ON_CONTACT_US_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "LAST_DOCUMENT_READ_DATA",
        payload: lastVisibleDoc,
      });
      dispatch({
        type: "HAS_MORE_DATA",
        payload: hasMore,
      });
      return dispatch({ type: "GET_CONTACT_US_DATA", payload: data });
    }
  };

export const LoadMoreContactusData =
  (dbCollection: string, lastVisibleDoc: any, limitN: number) =>
  async (dispatch: any, getState: RootState) => {
    if (!dbCollection) {
      throw new Error("Must be login to get data");
    }
    if (!lastVisibleDoc) {
      throw new Error("Need to provide lastVisible argument");
    }

    if (!Number.isInteger(limitN) || limitN < 1) {
      throw new Error("limit must be a positive integer");
    }

    return new Promise(async (resolve, reject) => {
      const { data, error, lastVisible, hasMore } = await loadMoreData(
        dbCollection,
        lastVisibleDoc,
        limitN,
      );
      if (error) {
        return dispatch({
          type: "ERROR_ON_CONTACT_US_DATA",
          payload: error,
        });
      }
      dispatch({
        type: "LAST_DOCUMENT_READ_DATA",
        payload: lastVisible,
      });
      dispatch({
        type: "HAS_MORE_DATA",
        payload: hasMore,
      });
      dispatch({ type: "UPDATE_CONTACT_US_DATA", payload: data });
    });
  };

export const deleteContactusData =
  (dbCollection: string, id: string) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    deleteDocument(dbCollection, id)
      .then(() => {
        dispatch({
          type: "DELETE_CONTACT_US_DATA",
          payload: id,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Deleted Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_CONTACT_US_DATA",
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: {
            message: "Something went wrong, please try again",
            variant: "error",
          },
        });
      });
  };

export const updateContactusData =
  (dbCollection: string, id: string, updatedData: any) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    updateDocument(dbCollection, id, updatedData)
      .then(() => {
        dispatch({
          type: "UPDATE_SINGLE_CONTACT_US_DATA",
          payload: updatedData,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Updated Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_CONTACT_US_DATA",
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: {
            message: "Something went wrong, please try again",
            variant: "error",
          },
        });
      });
  };
