import {
  deleteFile,
  fetchFiles,
  getDownloadUrl,
  uploadFile,
} from "@/database/fileUpload/action";
import { AppDispatch, RootState } from "@/store/reducer/rootReducer";
import { StorageReference } from "firebase/storage";

export const AddFirebaseStorage =
  (path: string, image: any, metadata: any) =>
  async (dispatch: AppDispatch) => {
    if (!path || !image) {
      return null;
    }
    try {
      const { downloadURL, ref } = await uploadFile(
        image,
        `${path}/${image?.name}`,
        metadata
      );
      const snackbarData = {
        message: "File uploaded successfully",
        variant: "success",
      };
      dispatch({ type: "SET_NOTISTACKMESSAGE_DATA", payload: snackbarData });
      dispatch({ type: "ADD_SINGLE_STORAGE_FILES", payload: { path, ref } });
      return dispatch({
        type: "ADD_FILE_URL",
        payload: { path, name: ref?.name, downloadURL },
      });
    } catch (error) {
      console.log(error);
      const snackbarErrorData = {
        message: "Error uploading file:",
        variant: "error",
      };
      return dispatch({
        type: "SET_SNACKBAR_DATA",
        payload: snackbarErrorData,
      });
    }
  };

export const getStorageFile =
  (path: string, itemsPerPage: number, nextPageToken?: string) =>
  async (dispatch: AppDispatch, getState: RootState) => {
    if (!path || !itemsPerPage) {
      return;
    }
    try {
      dispatch({
        type: "LOADING_STORAGE_FILES",
        payload: { path, loading: true },
      });
      const { filesList, nextPageTokenRef } = await fetchFiles(
        path,
        itemsPerPage,
        nextPageToken
      );
      filesList?.items?.forEach(
        async (file) => await dispatch(getDownloadURL(file))
      );
      dispatch({
        type: "ADD_STORAGE_FILES",
        payload: { path, items: filesList?.items },
      });
      dispatch({
        type: "ADD_STORAGE_FILES_NEXT_PAGE_TOKEN",
        payload: { path, nextPageTokenRef },
      });
      return dispatch({
        type: "LOADING_STORAGE_FILES",
        payload: { path, loading: false },
      });
      // const snackbarErrorData = {
      //   message: "File loaded successfully",
      //   variant: "success",
      // };
      // return dispatch({
      //   type: "SET_NOTISTACKMESSAGE_DATA",
      //   payload: snackbarErrorData,
      // });
    } catch (error) {
      console.log(error);
      const snackbarErrorData = {
        message: "Error in loading file:",
        variant: "error",
      };
      return dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: snackbarErrorData,
      });
    }
  };

export const DeleteFirebaseStorageFile =
  (reference: StorageReference) => async (dispatch: AppDispatch) => {
    if (!reference) {
      return null;
    }
    try {
      const path = reference?.parent?.fullPath;
      await deleteFile(reference);
      const snackbarData = {
        message: "File deleted successfully",
        variant: "success",
      };
      dispatch({ type: "SET_NOTISTACKMESSAGE_DATA", payload: snackbarData });
      dispatch({ type: "DELETE_STORAGE_DATA", payload: { path, reference } });
    } catch (error) {
      const snackbarErrorData = {
        message: "Error deleting file:",
        variant: "error",
      };
      return dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: snackbarErrorData,
      });
    }
  };

export const getDownloadURL =
  (reference: StorageReference) => async (dispatch: AppDispatch) => {
    if (!reference) {
      return null;
    }
    try {
      const path = reference?.parent?.fullPath;
      const downloadURL = await getDownloadUrl(reference);
      // const snackbarData = {
      //   message: "Url added successfully",
      //   variant: "success",
      // };
      // dispatch({ type: "SET_NOTISTACKMESSAGE_DATA", payload: snackbarData });
      return dispatch({
        type: "ADD_FILE_URL",
        payload: { path, name: reference?.name, downloadURL },
      });
    } catch (error) {
      const snackbarErrorData = {
        message: "Error getting url:",
        variant: "error",
      };
      return dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: snackbarErrorData,
      });
    }
  };
