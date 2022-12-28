import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

const reducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
