/* eslint-disable no-unused-vars */

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slice/authslice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})
