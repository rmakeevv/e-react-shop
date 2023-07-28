import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    value: {
        isLogged: boolean,
        userId: any,
        token: any
    }
}

const initialState = {
    value: {
        isLogged: false,
        userId: null,
        token: null
    }
} as AuthState


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
          state.value = {
              isLogged: true,
              userId: action.payload.userId,
              token: action.payload.token
          }
        },
        logOut: state => {
            state.value = {
                isLogged: false,
                userId: null,
                token: null
            }
        }
    }
})

export const {logOut, logIn} = authSlice.actions

export default authSlice.reducer