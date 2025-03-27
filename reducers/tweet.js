import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {content: null, token: null},
};

export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        post: (state, action) => {
            state.value.content = action.payload.content;
            state.value.token = action.payload.token;
        },
    },
});

export const { post } = tweetSlice.actions;
export default tweetSlice.reducer