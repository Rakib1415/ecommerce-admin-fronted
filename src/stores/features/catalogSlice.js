/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import catalogServices from '../../api/services/catalog-service';

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: '',
};
export const retrieveCatalogItems = createAsyncThunk(
  'catalog/retrieve',
  async (catalogId, thunkAPI) => {
    try {
      const res = await catalogServices.getCatalogitems(catalogId);
      //   console.log(res?.data?.data?.attributes?.products?.data);
      return res?.data?.data?.attributes?.products?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.response?.data?.error?.message);
    }
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: {
    [retrieveCatalogItems.pending]: (state) => {
      state.isLoading = true;
    },
    [retrieveCatalogItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.errorMessage = '';
    },
    [retrieveCatalogItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default catalogSlice.reducer;
