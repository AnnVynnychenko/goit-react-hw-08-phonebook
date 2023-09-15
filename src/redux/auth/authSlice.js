import { createSlice } from '@reduxjs/toolkit';
import { initialStateAuth } from 'redux/auth/initialStateAuth';
import { currentUser, logIn, logOut, register } from './authFetchApi';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const setAuthData = (state, payload) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const clearAuthData = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const setLoading = state => {
  state.isRefreshing = true;
};

const setUserData = (state, payload) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const unsetLoading = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        setAuthData(state, payload);
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        setAuthData(state, payload);
      })
      .addCase(logOut.fulfilled, state => {
        clearAuthData(state);
      })
      .addCase(currentUser.pending, state => {
        setLoading(state);
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        setUserData(state, payload);
      })
      .addCase(currentUser.rejected, state => {
        unsetLoading(state);
      });
  },
});

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
