import { createSlice } from "@reduxjs/toolkit";
import {resetDestination} from "./distinationSlice" 
const initalState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    //here we will define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
    // resetCount: (state) => {
    //   state.count = 0;
    // // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetDestination.toString(), (state, action) => {
      state.count = 0;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  //resetCount,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
