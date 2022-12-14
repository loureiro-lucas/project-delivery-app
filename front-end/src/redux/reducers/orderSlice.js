import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { cart } = state;
      const { id, name, price } = action.payload;

      const inCart = cart.find((p) => p.id === id);

      if (inCart) {
        const index = cart.findIndex((p) => p.id === id);
        cart[index].qty += 1;
        state.totalPrice += price;
      } else {
        cart.push({ id, name, price, qty: 1 });
        state.totalPrice += price;
      }
    },

    decreaseQty: (state, action) => {
      const { cart } = state;
      const { id } = action.payload;

      const index = cart.findIndex((p) => p.id === id);

      if (index) {
        cart[index].qty -= 1;
        state.totalPrice -= price;
      }

      if (cart[index].qty === 0) {
        state.cart.splice(index, 1);
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex((p) => p.id === id);
      state.cart.splice(index, 1);
    },
  },
});

export const { addToCart, decreaseQty, removeItem } = orderSlice.actions;
export default orderSlice.reducer;
