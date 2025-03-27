import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.token = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer