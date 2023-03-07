import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import adminReducer from "./slices/adminSlice";
import consultantReducer from "./slices/consultantSlice";
import sidebarReducer from "./slices/sidebar";

const rootReducer = combineReducers({
  userReducer,
  adminReducer,
  consultantReducer,
  sidebarReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
