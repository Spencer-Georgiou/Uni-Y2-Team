import { createSlice } from "@reduxjs/toolkit";

//createSlice: this method simplifies the process of creating actions and reducers.
//It takes the name of the slice, initial state, and reducer functions
const statusSlice = createSlice({
    //name of the slice
    name: "status",
    //initial state
    initialState: {
        status: false,
    },

    //returns the action creators to be dispatched, and the reducer configures the Redux store.
    reducers: {


        switchStatus: (state) => {
            if (state.status === false) {
                state.status = true
            } else {
                state.status = false
            }
        }

    },
});

//return reducer configures the Redux store.
export const statusReducer = statusSlice.reducer;
//returns the action creators to be dispatched
export const {
    switchStatus
} = statusSlice.actions;