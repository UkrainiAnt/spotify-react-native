import { createSlice } from "@reduxjs/toolkit";

interface CounterSliceState {
  count: number;
}

const initialState: CounterSliceState = {
  count: 0,
};

const slice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export default slice.reducer;
export const CounterActions = slice.actions;
