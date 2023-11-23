import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    isDetailsOpen: false,
    detailItem: [], 
}

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: { 
        toggleDetails(state,action){  
            state.detailItem = action.payload.item;
            state.isDetailsOpen = action.payload.isOpen;
             
            console.log(action.payload.item);
        } 
    },
});

export const {toggleDetails} = detailSlice.actions;
export default detailSlice.reducer;