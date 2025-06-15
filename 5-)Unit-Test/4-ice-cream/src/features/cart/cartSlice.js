import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      const { id, name, price, image, format } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id === `${id}-${format}`
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({
          id: `${id}-${format}`,
          productId: id,
          name,
          price,
          image,
          format,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        const newQuantity = state.items[itemIndex].quantity + quantity;
        if (newQuantity > 0) {
          state.items[itemIndex].quantity = newQuantity;
        } else {
          // Remove the item if quantity becomes 0 or less
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  toggleCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
