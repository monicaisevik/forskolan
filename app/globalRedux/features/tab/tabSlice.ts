'use client';

import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface tabState{
    getData:string[]; 
}

const initialState: tabState={
    getData:[],
}

const tabSlice=createSlice({
    name:'tab',
    initialState,
    reducers:{
        getDataHandler(state, action:PayloadAction <any[]>){
            state.getData=action.payload
        },
           },
    
})


export const tabActions = tabSlice.actions;
export default tabSlice.reducer;