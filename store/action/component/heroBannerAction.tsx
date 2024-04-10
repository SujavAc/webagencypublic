import { AppDispatch, RootState } from "../../reducer/rootReducer";
import { getData, loadMoreData } from "@/database/paginateData";
import addDocument, {
  deleteDocument,
  updateDocument,
} from "@/database/operation/action";

export const addHeroBannerData =
  (dbCollection: string, heroBannerData: any) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !heroBannerData) {
      return;
    }
    console.log(dbCollection);
    const { result, error } = await addDocument(dbCollection, heroBannerData);
    if (error) {
      console.log(error);
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Something went wrong", variant: "error" },
      });
      return dispatch({
        type: "ERROR_ON_HERO_BANNER_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Added Successfully", variant: "success" },
      });
      return dispatch({
        type: "ADD_HERO_BANNER_DATA",
        payload: { ...heroBannerData, id: result?.id },
      });
    }
  };

export const getHeroBannerData =
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
        type: "ERROR_ON_HERO_BANNER_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "LAST_HERO_BANNER_DOCUMENT_READ_DATA",
        payload: lastVisibleDoc,
      });
      dispatch({
        type: "HERO_BANNER_HAS_MORE_DATA",
        payload: hasMore,
      });
      return dispatch({ type: "Get_HERO_BANNER_DATA", payload: data });
    }
  };

export const LoadMoreHeroBannerData =
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
          type: "ERROR_ON_HERO_BANNER_DATA",
          payload: error,
        });
      }
      dispatch({
        type: "LAST_HERO_BANNER_DOCUMENT_READ_DATA",
        payload: lastVisible,
      });
      dispatch({
        type: "HERO_BANNER_HAS_MORE_DATA",
        payload: hasMore,
      });
      dispatch({ type: "UPDATE_HERO_BANNER_DATA", payload: data });
    });
  };

export const deleteHeroBannerData =
  (dbCollection: string, id: string) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    deleteDocument(dbCollection, id)
      .then(() => {
        dispatch({
          type: "DELETE_HERO_BANNER_DATA",
          payload: id,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Deleted Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_HERO_BANNER_DATA",
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

export const updateHeroBannerData =
  (dbCollection: string, id: string, updatedData: any) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    updateDocument(dbCollection, id, updatedData)
      .then(() => {
        dispatch({
          type: "UPDATE_SINGLE_HERO_BANNER_DATA",
          payload: updatedData,
        });
        dispatch({
          type: "UPDATE_SINGLE_COMPONENT_DATA",
          payload: updatedData,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Updated Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_HERO_BANNER_DATA",
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
