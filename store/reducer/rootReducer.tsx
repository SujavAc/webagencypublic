import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import notistackReducer from "./notistackReducer";
import contactusReducer from "./contactusReducer";
import heroBannerReducer from "./component/heroBannerReducer";
import sectionTitleReducer from "./component/sectionTitleReducer";
import featuresReducer from "./component/featureReducer";
import pagesReducer from "./pages/pageReducer";
import componentReducer from "./component/componentReducer";
import TableReducer from "./editor/tableReducer";
import firebaseStorageReducer from "./storage/firebaseStorageReducer";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    notistackMessage: notistackReducer,
    contactUsData: contactusReducer,
    heroBanner: heroBannerReducer,
    sectionTitle: sectionTitleReducer,
    features: featuresReducer,
    pages: pagesReducer,
    component: componentReducer,
    tableData: TableReducer,
    storageData: firebaseStorageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
