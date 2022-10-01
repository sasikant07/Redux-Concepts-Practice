import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialState = {
    numOfCakes: number
}

const initialState: initialState = {
    numOfCakes: 10
}


/* A function that accepts an initial state, an object full of reducer functions, 
and a "slice name", and automatically generates action creators and action types 
that correspond to the reducers and state. */
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;   // here we can directly mutate the state, IMMER library is working under the hood.
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfCakes += action.payload;
        }
    }
});

export default cakeSlice.reducer;         // <--- default exports
export const { ordered, restocked } = cakeSlice.actions;     // <-- named exports