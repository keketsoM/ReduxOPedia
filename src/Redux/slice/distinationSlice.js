import { createSlice } from "@reduxjs/toolkit"

const initalState =()=>{
    return{
        distination:[{
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

export const distinationSlice=createSlice({
    name: "distination",
    initialState:initalState,
    reducers:[]
    
})

export const distinationReducer=distinationSlice.reducer