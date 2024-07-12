import { IProduct } from '../../model/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    products: [] as IProduct[],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
        },
    },
});

export const productsReducer = productsSlice.reducer;

export const { setProducts } = productsSlice.actions;
