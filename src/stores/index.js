import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import cartReducer from './features/cartSlice';
import catalogReducer from './features/catalogSlice';
import productReducer from './features/productSlice';
import shopReducer from './features/shopSlice';
import userReducer from './features/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  product: productReducer,
  cart: cartReducer,
  catalog: catalogReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
