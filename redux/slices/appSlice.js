import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  toppings: "pepperoni",
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateToppings: (state, action) => {
      state.toppings = action.payload;
    }
  },
});

export const { updateIsLoading, updateToppings } = appSlice.actions;

export default appSlice.reducer;