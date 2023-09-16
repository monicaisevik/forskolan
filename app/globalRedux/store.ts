'use client';

import { configureStore } from "@reduxjs/toolkit";
import tabReducer from'./features/tab/tabSlice'


export const store=configureStore({
    reducer:{
        tab:tabReducer
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;