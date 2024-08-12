/* eslint-disable no-unused-vars */

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.REACT_APP_LOCALHOST_BACKEND || 'http://localhost:3000',
    withCredentials: true,
  });

export const addCommentAsync = createAsyncThunk(
    'comments/addCommentAsync',
    async({ postid, comment } , { rejectWithValue }) => {
        try {
            console.log(comment);
            console.log(postid);
            const response = await api.post(`/api/v1/comment/pushcomment`, { postid, comment });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
})

const initialState = {
    comments: [],
    status: 'idle',
    error : null,
}


const commentSlice = createSlice({

    name: 'comments',
    initialState,
    reducers: {
        addComment: (state,action) => {
            state.comments.push(action.payload);
        },
        setComment: (state,action) => {
            state.comments = action.payload;
        },
        removeComment: (state,action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCommentAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCommentAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments.push(action.payload);
            })
            .addCase(addCommentAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { addComment,setComment,removeComment } = commentSlice.actions;

export default commentSlice.reducer;
