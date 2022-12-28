import { createSlice } from '@reduxjs/toolkit';

const currentUser = localStorage.getItem('currentUser');

const initialState = currentUser
  ? { isLoggedIn: true, currentUser }
  : { isLoggedIn: false, currentUser: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export default authSlice.reducer;
