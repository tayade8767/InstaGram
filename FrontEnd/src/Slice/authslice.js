/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    user: null,
    error: null,
    isLoading: false,
}

export const register = createAsyncThunk('auth/register',
    async(userData,thunkAPI) => {
        try{
            const response = await axios.post('/register',userData);
            return response.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

export const login = createAsyncThunk('auth/login',
    async(userData,thunkAPI) => {
        try{
            const response = await axios.post('/login',userData);
            return response.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response.data);
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