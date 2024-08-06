/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    user: null,
    error: null,
    isLoading: false,
}

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_LOCALHOST_BACKEND || 'http://localhost:3000',
  // withCredentials: true,
});

export const register = createAsyncThunk('auth/register',
    async(userData,thunkAPI) => {
        try{
          console.log("Sending userData:", userData);
          const response = await api.post('/api/v1/users/register', userData);
          console.log("Response from server:", response.data);
          return response.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message);
        }
    }
)

export const login = createAsyncThunk('auth/login',
    async(userData,thunkAPI) => {
        try{
            console.log("Sending userData:", userData);
            const response = await api.post('/api/v1/users/login',userData);
            console.log("Response from server:", response.data);
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message);
        }
    }
)

const authslice  = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(register.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
          })
          .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(login.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
          })
          .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
      },
})



export const { logout } = authslice.actions;
export default authslice.reducer;