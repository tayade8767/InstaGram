/* eslint-disable no-unused-vars */

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slice/authslice';
import postslice from '../Slice/postslice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postslice,
    },
})
