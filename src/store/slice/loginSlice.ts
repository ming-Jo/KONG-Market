import { instance } from "@/api/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const getStorageItem = sessionStorage.getItem("token");
const TOKEN = getStorageItem ? JSON.parse(getStorageItem).token : null;
const USER_TYPE = getStorageItem ? JSON.parse(getStorageItem).user_type : null;
const USER_NAME =
  getStorageItem === null ? null : JSON.parse(getStorageItem).username;

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

interface LoginState {
  token?: string | null;
  userName: string;
  userType: string;
  status: string; // nothing | loading | success | faileds
  error: string;
}

const initialState: LoginState = {
  token: TOKEN ? TOKEN : null,
  userName: USER_NAME ? USER_NAME : "",
  userType: USER_TYPE ? USER_TYPE : "BUYER",
  status: "nothing",
  error: "",
};

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (
    { username, password, login_type }: LoginData,
    { rejectWithValue }
  ) => {
    try {
      const data = { username, password, login_type };
      const response = await instance.post("accounts/login/", data);

      if (response.data) {
        sessionStorage.setItem(
          "token",
          JSON.stringify({ username, ...response.data })
        );
      }

      return { username, ...response.data };
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

// 로그아웃
export const logout = createAsyncThunk("login/logout", async () => {
  sessionStorage.clear();
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      console.log(action);
      state.userType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.token = action.payload.token;
      state.userName = action.payload.username;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = "failed";
      if (action.payload) {
        state.error =
          (action.payload as string) &&
          "아이디 또는 패스워드가 일치하지 않습니다.";
      } else {
        state.error =
          action.error.message || "로그인에 실패하였습니다. 다시 시도해주세요.";
      }
    });
    // 로그아웃 시 실행될 리듀서
    builder.addCase(logout.fulfilled, (state) => {
      state.status = "nothing";
      state.token = null;
      state.userName = "";
      state.userType = "BUYER";
      state.error = "";
    });
  },
});

export const getToken = (state: RootState) => state.login.token;
export const getLoginStatus = (state: RootState) => state.login.status;
export const getLoginUserType = (state: RootState) => state.login.userType;
export const getAuthState = (state: RootState) => state.login;
export const getLoginError = (state: RootState) => state.login.error;

console.log(loginSlice.actions);
