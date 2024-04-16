const initialState = {
  pagesData: [],
  lastDocumentRead: "",
  hasMoreDoc: false,
  error: false,
};

const pagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_PAGES_DATA":
      return {
        ...state,
        pagesData:
          state.pagesData && state.pagesData?.length > 0
            ? [...state.pagesData, ...action?.payload]
            : action?.payload,
        error: false,
      };
    case "Get_PAGES_DATA":
      return {
        ...state,
        pagesData: action?.payload,
        error: false,
      };
    case "UPDATE_PAGES_DATA":
      return {
        ...state,
        pagesData: [...state.pagesData, ...action?.payload],
        error: false,
      };
    case "UPDATE_SINGLE_PAGES_DATA":
      const index = state.pagesData.findIndex(
        (contactData) => contactData.id === action?.payload?.id
      );
      let updateData;
      if (index !== -1) {
        state.pagesData[index] = action?.payload;
        updateData = [...state.pagesData];
      }
      return {
        ...state,
        pagesData: updateData,
        error: false,
      };
    case "DELETE_PAGES_DATA":
      return {
        ...state,
        pagesData: state.pagesData.filter(
          (data) => data.id !== action?.payload
        ),
        error: false,
      };
    case "ERROR_ON_PAGES_DATA":
      return {
        ...state,
        error: true,
      };
    case "LAST_PAGES_DOCUMENT_READ_DATA":
      return {
        ...state,
        lastDocumentRead: action.payload,
        error: false,
      };
    case "PAGES_HAS_MORE_DATA":
      return {
        ...state,
        hasMoreDoc: true,
        error: false,
      };
    default:
      return state;
  }
};
export default pagesReducer;
