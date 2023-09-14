import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement: (state) => {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    incrementByValue: (state, action) => {
      return {
        ...state,
        value: state.value + action.payload,
      };
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
