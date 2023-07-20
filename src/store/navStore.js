import {createSlice} from '@reduxjs/toolkit';

const navSlice = createSlice({
    name   : 'nav',
    initialState : {
        openModel : false , 
    } , 
    reducers : {
        openModel : (state)=>{
            state.openModel = true;
        } , 
        closeModel : (state)=>{
            state.openModel = false ; 
        } , 
        toggleModel : (state)=>{
            state.openModel = !state.openModel;
        }
    }
})

export const {openModel , closeModel , toggleModel} = navSlice.actions;

export default  navSlice.reducer;