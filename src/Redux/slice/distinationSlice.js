import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";
const initialState = () => {
  return {
    destination: [
      {
        name: "Hong kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 10,
        fact: "Last country in the world to be inhabited by humans",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      console.log(action);
    },
    // resetDestination: (state, action) => {
    
    //   state.destinationSelected = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state, action) => {
      state.destinationSelected = null;

    });
  },
});
export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
