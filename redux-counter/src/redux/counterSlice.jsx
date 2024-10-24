import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterVal : {
        value : 0,
    },
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state) => {state.counterVal.value++},
        decrement : (state) => {state.counterVal.value--},
    },
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer