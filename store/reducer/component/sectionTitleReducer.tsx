const initialState = {
  sectionTitleData: [],
  lastDocumentRead: "",
  hasMoreDoc: false,
  error: false,
};

const sectionTitleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_SECTION_TITLE_DATA":
      return {
        ...state,
        sectionTitleData:
          state.sectionTitleData && state.sectionTitleData?.length > 0
            ? [...state.sectionTitleData, action?.payload]
            : action?.payload,
        error: false,
      };
    case "Get_SECTION_TITLE_DATA":
      return {
        ...state,
        sectionTitleData: action?.payload,
        error: false,
      };
    case "UPDATE_SECTION_TITLE_DATA":
      return {
        ...state,
        sectionTitleData: [...state.sectionTitleData, ...action?.payload],
        error: false,
      };
    case "UPDATE_SINGLE_SECTION_TITLE_DATA":
      const index = state.sectionTitleData.findIndex(
        (contactData) => contactData.id === action?.payload?.id,
      );
      let updateData;
      if (index !== -1) {
        state.sectionTitleData[index] = action?.payload;
        updateData = [...state.sectionTitleData];
      }
      return {
        ...state,
        sectionTitleData: updateData,
        error: false,
      };
    case "DELETE_SECTION_TITLE_DATA":
      return {
        ...state,
        sectionTitleData: state.sectionTitleData.filter(
          (data) => data.id !== action?.payload,
        ),
        error: false,
      };
    case "ERROR_ON_SECTION_TITLE_DATA":
      return {
        ...state,
        error: true,
      };
    case "LAST_SECTION_TITLE_DOCUMENT_READ_DATA":
      return {
        ...state,
        lastDocumentRead: action.payload,
        error: false,
      };
    case "SECTION_TITLE_HAS_MORE_DATA":
      return {
        ...state,
        hasMoreDoc: true,
        error: false,
      };
    default:
      return state;
  }
};
export default sectionTitleReducer;
