import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/distinationSlice";

export const store = configureStore({
  reducer: {
    //we will fill this reducer later
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});

console.log(store.getState());
