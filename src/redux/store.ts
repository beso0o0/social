import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/loginslice";
import { postsReducer } from "./slices/postsSlice";


export let store = configureStore({
    reducer:{
        authReducer,
        postsReducer
    }
})


export type storeDispatch = typeof store.dispatch

export type storeState = ReturnType < typeof store.getState>