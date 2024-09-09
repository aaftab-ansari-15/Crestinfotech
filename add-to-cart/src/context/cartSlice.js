import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cartItems = state.cartItems.concat({
          ...action.payload,
          quantity: 1,
        });
      }
      console.log("add", state.cartItems);
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      console.log("remove", state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
