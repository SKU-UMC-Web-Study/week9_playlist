import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
  items: cartItems, 
  totalAmount: 0,
  totalQuantity:0
};

export const cartSlice = createSlice({
  name: "cartfunction",
  initialState,
  reducers: {
    increase: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      }
    },
    decrease: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.amount === 1) {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        } else {
          existingItem.amount -= 1;
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    calculateTotals: (state) => {
      let totalQuantity = 0;
      let totalAmount = 0;
      state.items.forEach(item => {
        totalAmount += item.price * item.amount;
        totalQuantity+=item.amount;
      });
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    }
  }
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
