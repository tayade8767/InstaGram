/* eslint-disable no-unused-vars */

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slice/authslice';
import postslice from '../Slice/postslice';
import commentslice from '../Slice/commentslice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postslice,
        comment: commentslice,
    },
})
