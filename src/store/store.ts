import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice/loginSlice";
import { modalSlice } from "./slice/modalSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;

//state type
export type RootState = ReturnType<typeof store.getState>;
//dispatch type
export type AppDispatch = typeof store.dispatch;
