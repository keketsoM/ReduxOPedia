import { createSlice } from "@reduxjs/toolkit"

const initalState =()=>{
    return{
        destination:[{
         name: "Hong kong",
         days:7,
         fact:"World's longest covered escalator",
        },
        {
            name: "Japan",
            days:10,
            fact:"japan is mostly mountains",
        }, 
        {
            name:"New Zealand",
            days:10,
            fact: "Last country in the world to be inhabited by humans",
        }
    ]
    }
 
}

export const destinationSlice=createSlice({
    name: "destination",
    initialState:initalState,
    reducers:[]
    
})

export const destinationReducer=destinationSlice.reducer