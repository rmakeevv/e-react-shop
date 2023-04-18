import { createSlice } from '@reduxjs/toolkit'
export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        value: {
            items: []
        }
    },
    reducers: {
        addItem: (state, action) => {
            state.value = {
                items: [...state.value.items,({...action.payload, basketItemId: Date.now()})]
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
        }
    }
})

export const {addItem, removeItem, checkOut, authUser} = basketSlice.actions

export default basketSlice.reducer