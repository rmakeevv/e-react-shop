import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';

interface AuthState {
    value: {
        isLogged: boolean;
        userId: string;
        token: string;
    };
}

const initialState = {
    value: {
        isLogged: false,
        userId: '',
        token: '',
    },
} as AuthState;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.value = {
                isLogged: true,
                userId: action.payload.userId,
                token: action.payload.token,
            };
        },
        logOut: (state) => {
            state.value = {
                isLogged: false,
                userId: '',
                token: '',
            };
        },
    },
});

export const { logOut, logIn } = authSlice.actions;

export const selectIsLogged = (state: RootState) => state.auth.value.isLogged;
export const selectUserId = (state: RootState) => state.auth.value.userId;

export default authSlice.reducer;
