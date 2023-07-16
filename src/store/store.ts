import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "@store/slice/loginSlice";
import { modalSlice } from "@store/slice/modalSlice";
import { productSlice } from "@store/slice/productSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    modal: modalSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;

//state type
export type RootState = ReturnType<typeof store.getState>;
//dispatch type
export type AppDispatch = typeof store.dispatch;
