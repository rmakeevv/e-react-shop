import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasketItem } from '../model/basket';
import { RootState } from './index';
import { IProduct } from '../model/product';

interface BasketState {
    value: {
        items: IBasketItem[];
        total: number;
        isOrdered?: boolean;
    };
}

const initialState: BasketState = {
    value: {
        items: [] as IBasketItem[],
        total: 0,
    },
};
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (
            state,
            action: PayloadAction<Pick<IProduct, '_id' | 'price'>>
        ) => {
            state.value.items = [
                ...state.value.items,
                { ...action.payload, basketItemId: Date.now() },
            ];
            state.value.total =
                state.value.total + Number(action.payload.price);
        },
        removeItem: (
            state,
            action: PayloadAction<
                Pick<IProduct, 'price'> & Pick<IBasketItem, 'basketItemId'>
            >
        ) => {
            state.value.items = [...state.value.items].filter(
                (item) => item.basketItemId !== action.payload.basketItemId
            );
            state.value.total =
                state.value.total - Number(action.payload.price);
        },
        checkOut: (state) => {
            state.value = {
                isOrdered: true,
                items: [],
                total: 0,
            };
        },
        deleteItems: (state) => {
            state.value.items = [];
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

export const selectBasketTotal = (state: RootState) => state.basket.value.total;

export default basketSlice.reducer;
