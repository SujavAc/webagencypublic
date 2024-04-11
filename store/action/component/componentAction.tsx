import { AppDispatch, RootState } from "../../reducer/rootReducer";
import { getData, loadMoreData } from "@/database/paginateData";
import addDocument, {
  deleteDocument,
  getSingleDocument,
  updateDocument,
} from "@/database/operation/action";
import { WhereCondition } from "@/types/firebase/where";

export const addComponentData =
  (dbCollection: string, componentData: any, dispatchType: string) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !componentData) {
      return;
    }
    const { result, error } = await addDocument(dbCollection, componentData);
    if (error) {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Something went wrong", variant: "error" },
      });
      return dispatch({
        type: "ERROR_ON_COMPONENT_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Added Successfully", variant: "success" },
      });
      return dispatch({
        type: "ADD_COMPONENT_DATA",
        payload: { ...componentData, id: result?.id },
      });
    }
  };

export const getSingleComponentData =
  (dbCollection: string, id: string) =>
  (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    getSingleDocument(dbCollection, id)
      .then((docSnap) => {
        if (docSnap.exists) {
          return dispatch({
            type: "Get_COMPONENT_DATA",
            payload: { ...docSnap.data(), id: docSnap.id },
          });
        } else {
          dispatch({
            type: "SET_NOTISTACKMESSAGE_DATA",
            payload: {
              message: "Data not exists",
              variant: "error",
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: {
            message: "Something went wrong, please try again",
            variant: "error",
          },
        });
        return dispatch({
          type: "ERROR_ON_COMPONENT_DATA",
          payload: error,
        });
      });
  };

export const getComponentData =
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
        type: "ERROR_ON_COMPONENT_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "LAST_COMPONENT_DOCUMENT_READ_DATA",
        payload: lastVisibleDoc,
      });
      dispatch({
        type: "COMPONENT_HAS_MORE_DATA",
        payload: hasMore,
      });
      return dispatch({ type: "Get_COMPONENT_DATA", payload: data });
    }
  };

export const LoadMoreComponentData =
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
          type: "ERROR_ON_COMPONENT_DATA",
          payload: error,
        });
      }
      dispatch({
        type: "LAST_COMPONENT_DOCUMENT_READ_DATA",
        payload: lastVisible,
      });
      dispatch({
        type: "COMPONENT_HAS_MORE_DATA",
        payload: hasMore,
      });
      dispatch({ type: "UPDATE_COMPONENT_DATA", payload: data });
    });
  };

export const deleteComponentData =
  (dbCollection: string, id: string) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    deleteDocument(dbCollection, id)
      .then(() => {
        dispatch({
          type: "DELETE_COMPONENT_DATA",
          payload: id,
        });
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Deleted Successfully", variant: "success" },
        });
      })
      .catch((e) => {
        dispatch({
          type: "ERROR_ON_COMPONENT_DATA",
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

export const updateComponentData =
  (dbCollection: string, id: string, updatedData: any) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    updateDocument(dbCollection, id, updatedData)
      .then(() => {
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
          type: "ERROR_ON_COMPONENT_DATA",
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

export const queryComponentData =
  (dbCollection: string, limitN: any, whereCondition: WhereCondition) =>
  async (dispatch: any, getState: RootState) => {
    if (!dbCollection || !whereCondition || !limitN) {
      return;
    }
    const { data, error } = await getData(dbCollection, limitN, whereCondition);
    // updateDocument(dbCollection, id, updatedData)
    //   .then(() => {
    //     dispatch({
    //       type: "UPDATE_SINGLE_COMPONENT_DATA",
    //       payload: updatedData,
    //     });
    //     dispatch({
    //       type: "SET_NOTISTACKMESSAGE_DATA",
    //       payload: { message: "Updated Successfully", variant: "success" },
    //     });
    //   })
    //   .catch((e) => {
    //     dispatch({
    //       type: "ERROR_ON_COMPONENT_DATA",
    //     });
    //     dispatch({
    //       type: "SET_NOTISTACKMESSAGE_DATA",
    //       payload: {
    //         message: "Something went wrong, please try again",
    //         variant: "error",
    //       },
    //     });
    //   });
  };
