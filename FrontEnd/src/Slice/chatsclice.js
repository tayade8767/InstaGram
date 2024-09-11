import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_LOCALHOST_BACKEND || 'http://localhost:3000',
  withCredentials: true,
});

export const sendMessage = createAsyncThunk('chat/sendMessage', async ({ message, receiverId }, thunkAPI) => {
  try {
    const response = await api.post('/api/v1/chat/send', { message, receiverId });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const fetchallusers = createAsyncThunk('chats/fetchAllUsers', async (_, thunkAPI) => {
  try {
    const response = await api.get('/api/v1/chat/allusers');
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

// New thunk to fetch the current user
export const fetchCurrentUser = createAsyncThunk('chat/fetchCurrentUser', async (_, thunkAPI) => {
  try {
    console.log("Fetching current user");  // Add a console.log statement here to see the request being made
    const response = await api.get('/api/v1/users/me'); // Adjust this endpoint as needed
    console.log("current logged in user::",response.data);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    users: [],
    selectedUser: null,
    currentUser: null, // Add currentUser to the state
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedUser(state, action) {
      // Changes made here to clear the messages when a new user is selected
      state.selectedUser = action.payload;
      state.messages = []; // Clear previous messages when selecting a new user
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      })
      .addCase(fetchallusers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchallusers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchallusers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      });
  },
});

export const { setSelectedUser } = chatSlice.actions;

export default chatSlice.reducer;