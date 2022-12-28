/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../../api/services/auth-service';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await authService.register(userData);
      return response.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.response?.data?.error?.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      return response.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.response?.data?.error?.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const initialState = currentUser
  ? { isLoggedIn: true, currentUser, isLoading: false, message: '' }
  : { isLoggedIn: false, currentUser: null, isLoading: false, message: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.currentUser = action.payload;
      state.message = 'you have register successfully!';
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.message = action.payload;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.currentUser = action.payload;
      state.message = 'you have login successfully!';
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.message = action.payload;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
