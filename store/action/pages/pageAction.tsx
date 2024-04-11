import { AppDispatch, RootState } from "../../reducer/rootReducer";
import { getData, isExistingData, loadMoreData } from "@/database/paginateData";
import addDocument, {
  deleteDocument,
  updateDocument,
} from "@/database/operation/action";
import { WhereCondition } from "@/types/firebase/where";

export const addPagesData =
  (dbCollection: string, pagesData: any) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !pagesData) {
      return;
    }
    const { pageName } = pagesData;
    const { isExist } = await isExistingData(dbCollection, {
      key: "pageName",
      filterOperation: "==",
      value: pageName,
    });
    if (!isExist) {
      const { result, error } = await addDocument(dbCollection, pagesData);
      if (error) {
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Something went wrong", variant: "error" },
        });
        return dispatch({
          type: "ERROR_ON_PAGES_DATA",
          payload: error,
        });
      } else {
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Added Successfully", variant: "success" },
        });
        return dispatch({
          type: "ADD_PAGES_DATA",
          payload: { ...pagesData, id: result?.id },
        });
      }
    } else {
      return dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: {
          message: "Page already exists, create new page",
          variant: "info",
        },
      });
    }
  };

export const getPagesData =
  (dbCollection: string, limit: number, whereCondition?: WhereCondition) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !limit) {
      return;
    }
    const { data, error, hasMore, lastVisibleDoc } = await getData(
      dbCollection,
      limit,
      whereCondition
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
        type: "ERROR_ON_PAGES_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "LAST_PAGES_DOCUMENT_READ_DATA",
        payload: lastVisibleDoc,
      });
      dispatch({
        type: "PAGES_HAS_MORE_DATA",
        payload: hasMore,
      });
      return dispatch({ type: "Get_PAGES_DATA", payload: data });
    }
  };

export const LoadMorePagesData =
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
          type: "ERROR_ON_PAGES_DATA",
          payload: error,
        });
      }
      dispatch({
        type: "LAST_PAGES_DOCUMENT_READ_DATA",
        payload: lastVisible,
      });
      dispatch({
        type: "PAGES_HAS_MORE_DATA",
        payload: hasMore,
      });
      dispatch({ type: "UPDATE_PAGES_DATA", payload: data });
    });
  };

export const deletePagesData =
  (dbCollection: string, id: string) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    deleteDocument(dbCollection, id)
      .then(() => {
        dispatch({
          type: "DELETE_PAGES_DATA",
          payload: id,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Deleted Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_PAGES_DATA",
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

export const updatePagesData =
  (dbCollection: string, id: string, updatedData: any) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    updateDocument(dbCollection, id, updatedData)
      .then(() => {
        dispatch({
          type: "UPDATE_SINGLE_PAGES_DATA",
          payload: updatedData,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Updated Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_PAGES_DATA",
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
