import { instance } from '@/api/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '@store/slice/productSlice';
import { RootState } from '@store/store';

interface DetailInitialState {
  status: string; // nothing | loading | success | failed
  error: string;
  detail: Product | null;
}

const initialState: DetailInitialState = {
  status: 'nothing',
  error: '',
  detail: null,
};

export const fetchProductDetail = createAsyncThunk('products/fetchProductDetail', async (productId: number) => {
  try {
    const response = await instance.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.status = 'success';
      state.detail = action.payload;
    });
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to load data.';
    });
  },
});

export const getDetailState = (state: RootState) => state.detail;
