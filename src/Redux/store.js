import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
    reducer:{
        //we will fill this reducer later
        counter: counterReducer
    }
})