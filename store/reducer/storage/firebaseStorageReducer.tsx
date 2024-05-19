const initialState = {
  // storageFiles: [],
  // nextPageToken: "",
  // storageFileUrls: {},
  // progress: "",
};

const firebaseStorageReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "ADD_SINGLE_STORAGE_FILES":
      state[action.payload.path] = {
        ...state[action.payload.path],
        storageFiles: state[action.payload.path]?.storageFiles
          ? state[action.payload.path]?.storageFiles
          : [],
      };
      return {
        ...state,
        // storageFiles: [...state.storageFiles, action.payload.ref],
        [action.payload.path]: {
          ...state[action.payload.path],
          storageFiles: [
            ...state[action.payload.path]?.storageFiles,
            action.payload.ref,
          ],
        },
      };
    case "ADD_STORAGE_FILES":
      state[action.payload.path] = {
        ...state[action.payload.path],
        storageFiles: state[action.payload.path]?.storageFiles
          ? state[action.payload.path]?.storageFiles
          : [],
      };
      return {
        ...state,
        // storageFiles: [...state.storageFiles, ...action.payload.items],
        [action.payload.path]: {
          ...state[action.payload.path],
          storageFiles: [
            ...state[action.payload.path]?.storageFiles,
            ...action.payload.items,
          ],
        },
      };
    case "ADD_UPLOAD_FILE_PROGRESS":
      return {
        ...state,
        progress: action.payload,
      };
    case "ADD_STORAGE_FILES_NEXT_PAGE_TOKEN":
      return {
        ...state,
        // nextPageToken: action.payload.nextPageTokenRef,
        [action.payload.path]: {
          ...state[action.payload.path],
          nextPageToken: action.payload.nextPageTokenRef,
        },
      };
    case "ADD_FILE_URL":
      return {
        ...state,
        // storageFileUrls: {
        //   ...state.storageFileUrls,
        //   [action.payload?.name]: action.payload?.downloadURL,
        // },
        [action.payload?.path]: {
          ...state[action.payload.path],
          storageFileUrls: {
            ...state[action.payload?.path].storageFileUrls,
            [action.payload?.name]: action.payload?.downloadURL,
          },
        },
      };
    case "DELETE_STORAGE_DATA":
      // delete state.storageFileUrls[action.payload?.reference?.name];
      delete state[action?.payload?.path].storageFileUrls[
        action.payload?.reference?.name
      ];
      return {
        ...state,
        // storageFiles: state.storageFiles.filter(
        //   (stRef) => stRef?.name !== action.payload?.reference?.name,
        // ),
        [action.payload.path]: {
          ...state[action.payload.path],
          storageFiles: state[action.payload.path].storageFiles.filter(
            (stRef) => stRef?.name !== action.payload?.reference?.name,
          ),
        },
      };
    default:
      return state;
  }
};
export default firebaseStorageReducer;
