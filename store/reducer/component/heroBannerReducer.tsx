const initialState = {
  heroBannerData: [],
  lastDocumentRead: "",
  hasMoreDoc: false,
  error: false,
};

const heroBannerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_HERO_BANNER_DATA":
      return {
        ...state,
        heroBannerData:
          state.heroBannerData && state.heroBannerData?.length > 0
            ? [...state.heroBannerData, action?.payload]
            : action?.payload,
        error: false,
      };
    case "Get_HERO_BANNER_DATA":
      return {
        ...state,
        heroBannerData: action?.payload,
        error: false,
      };
    case "UPDATE_HERO_BANNER_DATA":
      return {
        ...state,
        heroBannerData: [...state.heroBannerData, ...action?.payload],
        error: false,
      };
    case "UPDATE_SINGLE_HERO_BANNER_DATA":
      const index = state.heroBannerData.findIndex(
        (contactData) => contactData.id === action?.payload?.id,
      );
      let updateData;
      if (index !== -1) {
        state.heroBannerData[index] = action?.payload;
        updateData = [...state.heroBannerData];
      }
      return {
        ...state,
        heroBannerData: updateData,
        error: false,
      };
    case "DELETE_HERO_BANNER_DATA":
      return {
        ...state,
        heroBannerData: state.heroBannerData.filter(
          (data) => data.id !== action?.payload,
        ),
        error: false,
      };
    case "ERROR_ON_HERO_BANNER_DATA":
      return {
        ...state,
        error: true,
      };
    case "LAST_HERO_BANNER_DOCUMENT_READ_DATA":
      return {
        ...state,
        lastDocumentRead: action.payload,
        error: false,
      };
    case "HERO_BANNER_HAS_MORE_DATA":
      return {
        ...state,
        hasMoreDoc: true,
        error: false,
      };
    default:
      return state;
  }
};
export default heroBannerReducer;
