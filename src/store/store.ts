import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice/loginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;

//state type
export type RootState = ReturnType<typeof store.getState>;
//dispatch type
export type AppDispatch = typeof store.dispatch;
