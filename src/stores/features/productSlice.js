/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import shopServices from '../../api/services/shop-service';

const initialState = {
  item: {},
  isLoading: false,
  errorMessage: '',
};

export const findProductById = createAsyncThunk(
  'product/findById',
  async (id, thunkAPI) => {
    try {
      const res = await shopServices.get(id);
      return res.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.response?.data?.error?.message);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [findProductById.pending]: (state) => {
      state.isLoading = true;
    },
    [findProductById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
      state.errorMessage = '';
    },
    [findProductById.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default productSlice.reducer;
