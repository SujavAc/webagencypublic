const initialState = {
  data: [],
  lastDocumentRead: [],
  hasMoreDoc: [],
  error: false,
};

const TableReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_DATA":
      const addDataIndex = state.data.findIndex(
        (data) => data.key === action?.payload?.key,
      );
      let addUpdatedData;
      if (addDataIndex !== -1) {
        state.data[addDataIndex] = {
          key: action?.payload.key,
          value: [...state.data[addDataIndex]?.value, action?.payload?.value],
        };
        addUpdatedData = [...state.data];
      }
      return {
        ...state,
        data: addUpdatedData,
        error: false,
      };
    case "Get_DATA":
      return {
        ...state,
        data: [...state.data, action?.payload],
        error: false,
      };
    case "UPDATE_DATA":
      const dataIndex = state.data.findIndex(
        (data) => data.key === action?.payload?.key,
      );
      let updatedData;
      if (dataIndex !== -1) {
        state.data[dataIndex] = {
          key: action?.payload.key,
          value: [...state.data[dataIndex]?.value, ...action?.payload?.value],
        };
        updatedData = [...state.data];
      }
      return {
        ...state,
        data: updatedData,
        error: false,
      };
    case "UPDATE_SINGLE_DATA":
      const index = state.data.findIndex(
        (contactData) => contactData.key === action?.payload?.key,
      );
      let updateData;
      if (index !== -1) {
        let { key, value } = state.data[index];
        const valueindex = value.findIndex(
          (valueData) => valueData.id === action?.payload?.value?.id,
        );
        value[valueindex] = action.payload?.value;
        state.data[index] = { key, value };
        updateData = [...state.data];
      }
      return {
        ...state,
        data: updateData,
        error: false,
      };
    case "DELETE_DATA":
      const deleteDataIndex = state.data.findIndex(
        (contactData) => contactData.key === action?.payload?.key,
      );
      let updateDataAfterDeletion;
      if (deleteDataIndex !== -1) {
        let { key, value } = state.data[deleteDataIndex];
        value = value.filter(
          (valueData) => valueData.id !== action?.payload?.value,
        );
        state.data[deleteDataIndex] = { key, value };
        updateDataAfterDeletion = [...state.data];
      }
      return {
        ...state,
        data: updateDataAfterDeletion,
        error: false,
      };
    case "ERROR_ON_DATA":
      return {
        ...state,
        error: true,
      };
    case "LAST_DOCUMENT_READ_DATA":
      return {
        ...state,
        lastDocumentRead:
          state.lastDocumentRead && state.lastDocumentRead?.length > 0
            ? [...state.lastDocumentRead, action?.payload]
            : [action?.payload],
        error: false,
      };
    case "UPDATE_LAST_DOCUMENT_READ_DATA":
      const lastDocumentReadDataindex = state.lastDocumentRead.findIndex(
        (lastRead) => lastRead.key === action?.payload?.key,
      );
      let updateLastDocumentReadData;
      if (lastDocumentReadDataindex !== -1) {
        state.lastDocumentRead[lastDocumentReadDataindex] = action?.payload;
        updateLastDocumentReadData = [...state.lastDocumentRead];
      }

      return {
        ...state,
        lastDocumentRead: updateLastDocumentReadData,
        error: false,
      };
    case "HAS_MORE_DATA":
      return {
        ...state,
        hasMoreDoc:
          state.hasMoreDoc && state.hasMoreDoc?.length > 0
            ? [...state.hasMoreDoc, action?.payload]
            : [action?.payload],
        error: false,
      };
    default:
      return state;
  }
};
export default TableReducer;
