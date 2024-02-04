import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    plusOne: (state) => {
      return state + 1;
    },
    minusOne: (state) => {
      return state - 1;
    },
    reset: (state) => {
      return (state = 0);
    },
  },
});

export const { plusOne, minusOne, reset } = counterSlice.actions;

export default counterSlice.reducer;
