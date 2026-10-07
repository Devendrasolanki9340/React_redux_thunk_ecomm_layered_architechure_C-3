
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../Features/auth/state/authSlice"

export const store  = configureStore({
    reducer:{
        auth : authReducer,
    },
})