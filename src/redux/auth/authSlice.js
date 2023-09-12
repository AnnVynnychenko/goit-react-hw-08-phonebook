import { createSlice } from '@reduxjs/toolkit';
import { initialStateAuth } from 'redux/auth/initialStateAuth';
import { register } from './authFetchApi';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: {},
});

export const authSliceReducer = authSlice.reducer;
