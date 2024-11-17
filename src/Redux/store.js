import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { distinationReducer } from "./slice/distinationSlice";

export const store = configureStore({
  reducer: {
    //we will fill this reducer later
    counterStore: counterReducer,
    distinationStore: distinationReducer,
  },
});

console.log(store.getState());
