/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userServices from '../../api/services/user-service';

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: '',
};

export const retrieveAllUser = createAsyncThunk(
  'user/retrieve',
  async (_, thunkAPI) => {
    try {
      const res = await userServices.getAllUser();

      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.response?.data?.error?.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [retrieveAllUser.pending]: (state) => {
      state.isLoading = true;
    },
    [retrieveAllUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.errorMessage = '';
    },
    [retrieveAllUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default userSlice.reducer;
