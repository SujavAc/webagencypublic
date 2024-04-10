import { AppDispatch, RootState } from "../../reducer/rootReducer";
import { getData, loadMoreData } from "@/database/paginateData";
import addDocument, {
  deleteDocument,
  updateDocument,
} from "@/database/operation/action";

export const addFeaturesData =
  (dbCollection: string, featureData: any) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !featureData) {
      return;
    }
    console.log(dbCollection);
    const { result, error } = await addDocument(dbCollection, featureData);
    if (error) {
      console.log(error);
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Something went wrong", variant: "error" },
      });
      return dispatch({
        type: "ERROR_ON_FEATURE_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Added Successfully", variant: "success" },
      });
      return dispatch({
        type: "ADD_FEATURE_DATA",
        payload: { ...featureData, id: result?.id },
      });
    }
  };

export const getFeaturesData =
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
        type: "ERROR_ON_FEATURE_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "LAST_FEATURE_DOCUMENT_READ_DATA",
        payload: lastVisibleDoc,
      });
      dispatch({
        type: "FEATURE_HAS_MORE_DATA",
        payload: hasMore,
      });
      return dispatch({ type: "Get_FEATURE_DATA", payload: data });
    }
  };

export const LoadMoreFeaturesData =
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
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: {
            message: "Something went wrong, please try again",
            variant: "error",
          },
        });
        return dispatch({
          type: "ERROR_ON_FEATURE_DATA",
          payload: error,
        });
      }
      dispatch({
        type: "LAST_FEATURE_DOCUMENT_READ_DATA",
        payload: lastVisible,
      });
      dispatch({
        type: "FEATURE_HAS_MORE_DATA",
        payload: hasMore,
      });
      dispatch({ type: "UPDATE_FEATURE_DATA", payload: data });
    });
  };

export const deleteFeaturesData =
  (dbCollection: string, id: string) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    deleteDocument(dbCollection, id)
      .then(() => {
        dispatch({
          type: "DELETE_FEATURE_DATA",
          payload: id,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Deleted Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_FEATURE_DATA",
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

export const updateFeaturesData =
  (dbCollection: string, id: string, updatedData: any) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    updateDocument(dbCollection, id, updatedData)
      .then(() => {
        dispatch({
          type: "UPDATE_SINGLE_FEATURE_DATA",
          payload: updatedData,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Updated Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_FEATURE_DATA",
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
