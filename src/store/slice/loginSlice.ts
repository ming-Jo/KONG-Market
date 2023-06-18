import { instance } from "@/api/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

interface LoginState {
  userType: string;
  status: string;
}

const initialState: LoginState = {
  userType: "BUYER",
  status: "nothing",
};

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async ({ username, password, login_type }: LoginData) => {
    try {
      const data = { username, password, login_type };
      const response = await instance.post("accounts/login/", data);

      if (response.data) {
        sessionStorage.setItem("token", JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      console.log(state, action);

      state.userType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const getLoginStatus = (state: RootState) => state.login.status;
export const getLoginUserType = (state: RootState) => state.login.userType;
