const initialState = {
  featuresData: [],
  lastDocumentRead: "",
  hasMoreDoc: false,
  error: false,
};

const featuresReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_FEATURE_DATA":
      return {
        ...state,
        featuresData:
          state.featuresData && state.featuresData?.length > 0
            ? [...state.featuresData, action?.payload]
            : action?.payload,
        error: false,
      };
    case "Get_FEATURE_DATA":
      return {
        ...state,
        featuresData: action?.payload,
        error: false,
      };
    case "UPDATE_FEATURE_DATA":
      return {
        ...state,
        featuresData: [...state.featuresData, ...action?.payload],
        error: false,
      };
    case "UPDATE_SINGLE_FEATURE_DATA":
      const index = state.featuresData.findIndex(
        (contactData) => contactData.id === action?.payload?.id,
      );
      let updateData;
      if (index !== -1) {
        state.featuresData[index] = action?.payload;
        updateData = [...state.featuresData];
      }
      return {
        ...state,
        featuresData: updateData,
        error: false,
      };
    case "DELETE_FEATURE_DATA":
      return {
        ...state,
        featuresData: state.featuresData.filter(
          (data) => data.id !== action?.payload,
        ),
        error: false,
      };
    case "ERROR_ON_FEATURE_DATA":
      return {
        ...state,
        error: true,
      };
    case "LAST_FEATURE_DOCUMENT_READ_DATA":
      return {
        ...state,
        lastDocumentRead: action.payload,
        error: false,
      };
    case "FEATURE_HAS_MORE_DATA":
      return {
        ...state,
        hasMoreDoc: true,
        error: false,
      };
    default:
      return state;
  }
};
export default featuresReducer;
