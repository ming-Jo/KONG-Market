import { instance } from '@/api/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

export interface RegisterData {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
  email?: string;
  company_registration_number?: string;
  store_name?: string;
}

interface RegisterState {
  // status: 'nothing' | 'loading' | 'success' | 'failed'
  registerStatus: string;
  error: string;
  userType: string;
  nameStatus: string;
  nameMessage: string;
  companyNumberStatus: string;
  companyNumberMessage: string;
}

const initialState: RegisterState = {
  registerStatus: 'nothing',
  error: '',
  userType: 'BUYER',
  nameStatus: 'nothing',
  nameMessage: '',
  companyNumberStatus: 'nothing',
  companyNumberMessage: '',
};

// 계정 유효성 검증
export const fetchValidUserName = createAsyncThunk(
  'signup/fetchValidUserName',
  async (username: string, { rejectWithValue }) => {
    try {
      const data = { username };
      const response = await instance.post('accounts/signup/valid/username/', data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

// 사업자등록번호 유효성 검증
export const fetchValidCompanyNumber = createAsyncThunk(
  'signup/fetchValidCompanyNumber',
  async (number: string, { rejectWithValue }) => {
    try {
      const data = { company_registration_number: number };
      const response = await instance.post('accounts/signup/valid/company_registration_number/', data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

// 회원가입
export const fetchSignUp = createAsyncThunk(
  'signup/fetchSignUp',
  async ({ userType, userData }: { userType: string; userData: RegisterData }, { rejectWithValue }) => {
    const url = userType === 'BUYER' ? 'accounts/signup/' : 'accounts/signup_seller/';
    try {
      const data = userData;
      const response = await instance.post(url, data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetAll: () => initialState,
    resetName: (state) => {
      state.nameStatus = 'nothing';
      state.nameMessage = '';
    },
    resetCompany: (state) => {
      state.companyNumberStatus = 'nothing';
      state.companyNumberMessage = '';
    },
    resetRegister: (state) => {
      state.registerStatus = 'nothing';
      state.error = '';
    },
    setSignupUserType: (state, action) => {
      console.log(action);
      state.userType = action.payload;
    },
  },
  extraReducers: (builder) => {
    // 계정 검증
    builder.addCase(fetchValidUserName.pending, (state) => {
      state.nameStatus = 'loading';
      state.nameMessage = '';
      state.error = '';
    });
    builder.addCase(fetchValidUserName.fulfilled, (state, action) => {
      state.nameStatus = 'success';
      state.nameMessage = action.payload.Success;
    });
    builder.addCase(fetchValidUserName.rejected, (state, action) => {
      state.nameStatus = 'failed';
      if (action.payload) {
        state.nameMessage = action.payload as string;
      } else {
        state.error = action.error.message || '올바른 정보를 입력해주세요.';
      }
    });

    // 사업자등록번호 검증
    builder.addCase(fetchValidCompanyNumber.pending, (state) => {
      state.companyNumberStatus = 'loading';
    });
    builder.addCase(fetchValidCompanyNumber.fulfilled, (state, action) => {
      state.companyNumberStatus = 'success';
      state.companyNumberMessage = action.payload.Success;
    });
    builder.addCase(fetchValidCompanyNumber.rejected, (state, action) => {
      state.companyNumberStatus = 'failed';
      if (action.payload) {
        state.companyNumberMessage = action.payload as string;
      } else {
        state.error = action.error.message || '올바른 정보를 입력해주세요.';
      }
    });

    // 회원가입
    builder.addCase(fetchSignUp.pending, (state) => {
      state.registerStatus = 'loading';
    });
    builder.addCase(fetchSignUp.fulfilled, (state, action) => {
      state.registerStatus = 'success';
    });
    builder.addCase(fetchSignUp.rejected, (state, action) => {
      state.registerStatus = 'failed';
      if (action.payload) {
        console.log('회원가입 : ', action.payload);
        console.log('회원가입 : ', action.error.message);
      }
      state.error = action.error.message || 'Fail to register';
    });
  },
});

export const getSignupState = (state: RootState) => state.signup;
export const getSignupUserType = (state: RootState) => state.signup.userType;

export const { setSignupUserType, resetAll, resetName, resetCompany, resetRegister } = signupSlice.actions;
