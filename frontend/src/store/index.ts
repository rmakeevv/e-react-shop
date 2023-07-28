import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice";
import basketReducer from "./basketSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        basket: basketReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>