
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  posts: [],
  error: null, 
  isLoading: false,
};

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_LOCALHOST_BACKEND || 'http://localhost:3000',
  withCredentials: true,
});

export const fetchPosts = createAsyncThunk('posts/fetch', async (postdata, thunkAPI) => {
  try {
    const response = await api.post('/', postdata);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const createPost = createAsyncThunk('posts/create', async (postData, thunkAPI) => {
  try {
    const response = await api.post('/api/v1/posts/create', postData);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const updatePost = createAsyncThunk('posts/update', async ({ id, data }, thunkAPI) => {
  try {
    const response = await api.put(`/api/v1/posts/${id}`, data);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const deletePost = createAsyncThunk('posts/delete', async (id, thunkAPI) => {
  try {
    await api.delete(`/api/v1/posts/${id}`);
    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default postsSlice.reducer;