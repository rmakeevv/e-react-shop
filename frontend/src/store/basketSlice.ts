import { createSlice } from '@reduxjs/toolkit'

interface BasketState {
    value: {
        items: Array<any>,
        isOrdered?: boolean
    }

}

const initialState: BasketState = {
    value: {
        items: []
    }
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.value = {
                items: [...state.value.items,{...action.payload, basketItemId: Date.now()}]
            }
        },
        removeItem: (state, action) => {
            state.value = {
                items: [...state.value.items].filter(item => item.basketItemId !== action.payload)
            }
        },
        checkOut: (state) => {
            state.value = {
                isOrdered: true,
                items: []
            }
        },
        deleteItems: (state) => {
            state.value = {
                items: []
            }
        }
    }
})

export const {addItem, removeItem, checkOut, deleteItems} = basketSlice.actions

export default basketSlice.reducer