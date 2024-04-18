import { AppDispatch, RootState } from "../../reducer/rootReducer";
import { getData, loadMoreData } from "@/database/paginateData";
import addDocument, {
  deleteDocument,
  updateDocument,
} from "@/database/operation/action";

export const addData =
  (dbCollection: string, Data: any) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !Data) {
      return;
    }
    const { result, error } = await addDocument(dbCollection, Data);
    if (error) {
      console.log(error);
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Something went wrong", variant: "error" },
      });
      return dispatch({
        type: "ERROR_ON_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Added Successfully", variant: "success" },
      });
      return dispatch({
        type: "ADD_DATA",
        payload: { key: dbCollection, value: { ...Data, id: result?.id } },
      });
    }
  };

export const getDataFromCollection =
  (dbCollection: string, limit: number) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !limit) {
      return;
    }
    const { data, error, hasMore, lastVisibleDoc } = await getData(
      dbCollection,
      limit
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
        type: "ERROR_ON_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "LAST_DOCUMENT_READ_DATA",
        payload: { key: dbCollection, value: lastVisibleDoc },
      });
      dispatch({
        type: "HAS_MORE_DATA",
        payload: { key: dbCollection, value: hasMore },
      });
      return dispatch({
        type: "Get_DATA",
        payload: { key: dbCollection, value: data },
      });
    }
  };

export const LoadMoreDataFromCollection =
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
        limitN
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
          type: "ERROR_ON_DATA",
          payload: error,
        });
      }
      dispatch({
        type: "UPDATE_LAST_DOCUMENT_READ_DATA",
        payload: { key: dbCollection, value: lastVisible },
      });
      dispatch({
        type: "HAS_MORE_DATA",
        payload: { key: dbCollection, value: hasMore },
      });
      dispatch({
        type: "UPDATE_DATA",
        payload: { key: dbCollection, value: data },
      });
    });
  };

export const deleteData =
  (dbCollection: string, id: string) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    deleteDocument(dbCollection, id)
      .then(() => {
        dispatch({
          type: "DELETE_DATA",
          payload: { key: dbCollection, value: id },
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Deleted Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_DATA",
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

export const updateData =
  (dbCollection: string, id: string, updatedData: any) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    updateDocument(dbCollection, id, updatedData)
      .then(() => {
        dispatch({
          type: "UPDATE_SINGLE_DATA",
          payload: { key: dbCollection, value: updatedData },
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Updated Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_DATA",
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
