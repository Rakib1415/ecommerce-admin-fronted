/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from '../../utils/cart';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = addItemToCart(state.items, action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
