import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    States: [
        {
            id: 1,
            name: 'Alabama',
        },
        {
            id: 2,
            name: 'Alaska',
        },
        {
            id: 3,
            name: 'Arizona',
        },
    ],
};
export const Slice = createSlice({
    name:'State',
    initialState,
    reducers: {
        addState: (state, action, payload) => {
            state.States.push(action.payload);
        },
        clearState : (state, action, payload) => {
            state.States = payload;
    
    },
},

});
export const {addState,clearState} = Slice.actions;
export default Slice.reducer;


