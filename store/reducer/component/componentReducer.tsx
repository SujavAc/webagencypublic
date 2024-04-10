const initialState = {
  componentData: [],
  lastDocumentRead: "",
  hasMoreDoc: false,
  error: false,
};

const componentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_COMPONENT_DATA":
      return {
        ...state,
        componentData:
          state.componentData && state.componentData?.length > 0
            ? [...state.componentData, action?.payload]
            : [action?.payload],
        error: false,
      };
    case "Get_COMPONENT_DATA":
      return {
        ...state,
        componentData:
          state.componentData && state.componentData?.length > 0
            ? [...state.componentData, action?.payload]
            : [action?.payload],
        error: false,
      };
    case "UPDATE_COMPONENT_DATA":
      return {
        ...state,
        componentData: [...state.componentData, ...action?.payload],
        error: false,
      };
    case "UPDATE_SINGLE_COMPONENT_DATA":
      const index = state.componentData.findIndex(
        (contactData) => contactData.id === action?.payload?.id,
      );
      let updateData;
      if (index !== -1) {
        state.componentData[index] = action?.payload;
        updateData = [...state.componentData];
      }
      return {
        ...state,
        componentData: updateData,
        error: false,
      };
    case "DELETE_COMPONENT_DATA":
      return {
        ...state,
        componentData: state.componentData.filter(
          (data) => data.id !== action?.payload,
        ),
        error: false,
      };
    case "ERROR_ON_COMPONENT_DATA":
      return {
        ...state,
        error: true,
      };
    case "LAST_COMPONENT_DOCUMENT_READ_DATA":
      return {
        ...state,
        lastDocumentRead: action.payload,
        error: false,
      };
    case "COMPONENT_HAS_MORE_DATA":
      return {
        ...state,
        hasMoreDoc: true,
        error: false,
      };
    default:
      return state;
  }
};
export default componentReducer;
