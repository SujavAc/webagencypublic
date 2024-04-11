import { AppDispatch, RootState } from "../../reducer/rootReducer";
import { getData, loadMoreData } from "@/database/paginateData";
import addDocument, {
  deleteDocument,
  updateDocument,
} from "@/database/operation/action";
import { filterOutArrayByKeyValuePair } from "@/utils/array";

export const addSectionTitleData =
  (dbCollection: string, sectionTitleData: any) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!dbCollection || !sectionTitleData) {
      return;
    }
    const { result, error } = await addDocument(dbCollection, sectionTitleData);
    if (error) {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Something went wrong", variant: "error" },
      });
      return dispatch({
        type: "ERROR_ON_SECTION_TITLE_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Added Successfully", variant: "success" },
      });
      return dispatch({
        type: "ADD_SECTION_TITLE_DATA",
        payload: { ...sectionTitleData, id: result?.id },
      });
    }
  };

export const getSectionTitleData =
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
        type: "ERROR_ON_SECTION_TITLE_DATA",
        payload: error,
      });
    } else {
      dispatch({
        type: "LAST_SECTION_TITLE_DOCUMENT_READ_DATA",
        payload: lastVisibleDoc,
      });
      dispatch({
        type: "SECTION_TITLE_HAS_MORE_DATA",
        payload: hasMore,
      });
      return dispatch({ type: "Get_SECTION_TITLE_DATA", payload: data });
    }
  };

export const LoadMoreSectionTitleData =
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
          type: "ERROR_ON_SECTION_TITLE_DATA",
          payload: error,
        });
      }
      dispatch({
        type: "LAST_SECTION_TITLE_DOCUMENT_READ_DATA",
        payload: lastVisible,
      });
      dispatch({
        type: "SECTION_TITLE_HAS_MORE_DATA",
        payload: hasMore,
      });
      dispatch({ type: "UPDATE_SECTION_TITLE_DATA", payload: data });
    });
  };

export const deleteSectionTitleData =
  (dbCollection: string, id: string) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    deleteDocument(dbCollection, id)
      .then(async () => {
        dispatch({
          type: "DELETE_SECTION_TITLE_DATA",
          payload: id,
        });
        // const { data, error } = await getData(
        //   'pages',
        //   10,
        //   {key: "components", filterOperation: 'array-contains', value: {componentName:"sectionTitle", id: id}}
        // );
        // if(!error){
        //   data?.map((d) => ({...d, components: filterOutArrayByKeyValuePair(d.components, 'id', id)}))
        // }
        // need to update when the component variation is deleted.
        // not sure in which page this component is being used previously
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
          type: "ERROR_ON_SECTION_TITLE_DATA",
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

export const updateSectionTitleData =
  (dbCollection: string, id: string, updatedData: any) =>
  (dispatch: any, getState: RootState) => {
    if (!dbCollection || !id) {
      return;
    }
    updateDocument(dbCollection, id, updatedData)
      .then(() => {
        dispatch({
          type: "UPDATE_SINGLE_SECTION_TITLE_DATA",
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
          type: "ERROR_ON_SECTION_TITLE_DATA",
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
