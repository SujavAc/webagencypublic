const initialState = {
  contactUsData: null,
  lastDocumentRead: "",
  hasMoreDoc: false,
  error: false,
};

const contactusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_CONTACT_US_DATA":
      return {
        ...state,
        contactUsData: action?.payload,
        error: false,
      };
    case "ADD_CONTACT_US_DATA":
      return {
        ...state,
        contactUsData: [...state.contactUsData, action?.payload],
        error: false,
      };
    case "UPDATE_CONTACT_US_DATA":
      return {
        ...state,
        contactUsData: [...state.contactUsData, ...action?.payload],
        error: false,
      };
    case "UPDATE_SINGLE_CONTACT_US_DATA":
      const index = state.contactUsData.findIndex(
        (contactData) => contactData.id === action?.payload?.id,
      );
      let updateData;
      if (index !== -1) {
        state.contactUsData[index] = action?.payload;
        updateData = [...state.contactUsData];
      }
      return {
        ...state,
        contactUsData: updateData,
        error: false,
      };
    case "DELETE_CONTACT_US_DATA":
      return {
        ...state,
        contactUsData: state.contactUsData.filter(
          (data) => data.id !== action?.payload,
        ),
        error: false,
      };
    case "ERROR_ON_CONTACT_US_DATA":
      return {
        ...state,
        error: true,
      };
    case "LAST_DOCUMENT_READ_DATA":
      return {
        ...state,
        lastDocumentRead: action.payload,
        error: false,
      };
    case "HAS_MORE_DATA":
      return {
        ...state,
        hasMoreDoc: true,
        error: false,
      };
    default:
      return state;
  }
};
export default contactusReducer;
