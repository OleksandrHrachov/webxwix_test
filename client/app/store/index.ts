'use client';

import { configureStore } from '@reduxjs/toolkit';
import productReducer, { initialState } from './productSlice';
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    products: productReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
