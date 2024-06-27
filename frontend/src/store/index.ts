import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import basketReducer from './basketSlice';
import { productsApi } from './rtk';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { ordersApi } from './rtk/orders';

const store = configureStore({
    reducer: {
        auth: authReducer,
        basket: basketReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productsApi.middleware,
            ordersApi.middleware
        ),
});

export default store;

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
