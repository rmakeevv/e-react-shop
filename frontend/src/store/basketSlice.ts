import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasketItem } from '../model/basket';
import { RootState } from './index';
import { IProduct } from '../model/product';

interface BasketState {
    value: {
        items: Array<IBasketItem>;
        isOrdered?: boolean;
    };
}

const initialState: BasketState = {
    value: {
        items: [] as IBasketItem[],
    },
};
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            state.value = {
                items: [
                    ...state.value.items,
                    { ...action.payload, basketItemId: Date.now() },
                ],
            };
        },
        removeItem: (state, action) => {
            state.value = {
                items: [...state.value.items].filter(
                    (item) => item.basketItemId !== action.payload
                ),
            };
        },
        checkOut: (state) => {
            state.value = {
                isOrdered: true,
                items: [],
            };
        },
        deleteItems: (state) => {
            state.value = {
                items: [],
            };
        },
    },
});

export const { addItem, removeItem, checkOut, deleteItems } =
    basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.value.items;

export const selectBasketQuantity = (state: RootState) =>
    state.basket.value.items.length;

export const selectBasketIsOrdered = (state: RootState) =>
    state.basket.value.isOrdered;

export const selectBasketTotal = (state: RootState) =>
    state.basket.value.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
    );

export default basketSlice.reducer;
