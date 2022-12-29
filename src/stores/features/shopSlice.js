/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import shopServices from '../../api/services/shop-service';

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: '',
};

export const retrieveProducts = createAsyncThunk(
  'products/retrieve',
  async (_, thunkAPI) => {
    try {
      const res = await shopServices.getAll();
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.response?.data?.error?.message);
    }
  }
);

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers: {
    [retrieveProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [retrieveProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.errorMessage = '';
    },
    [retrieveProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default shopSlice.reducer;
