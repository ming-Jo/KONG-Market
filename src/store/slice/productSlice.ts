import { instance } from "@/api/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

export interface Product {
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  store_name: string;
  shipping_fee: number;
  shipping_method: string;
  stock: number;
  created_at: string;
}

interface ProductInitialState {
  status: string; // nothing | loading | success | failed
  error: string;
  totalPage: number;
  productList: Product[];
}

const initialState: ProductInitialState = {
  status: "nothing",
  error: "",
  totalPage: 1,
  productList: [],
};

export const fetchProductData = createAsyncThunk(
  "products/fetchProductData",
  async (pageNumber: number) => {
    try {
      const response = await instance.get(`products/?page=${pageNumber}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.status = "success";
      state.totalPage = Math.floor(action.payload.count / 15) + 1;
      state.productList = action.payload.results;
    });
    builder.addCase(fetchProductData.rejected, (state) => {
      state.status = "failed";
      state.productList = [];
    });
  },
});

export const getProductState = (state: RootState) => state.product;
