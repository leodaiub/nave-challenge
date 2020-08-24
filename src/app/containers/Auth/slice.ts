import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Auth container
export const initialState: ContainerState = {
  authenticated: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuth(state) {
      const token = localStorage.getItem('token');
      if (token) {
        state.loading = false;
        state.authenticated = true;
      }
    },
    login(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    loggedIn(state, action: PayloadAction<any>) {
      state.loading = false;
      state.authenticated = true;
    },
    logout(state) {
      localStorage.removeItem('token');
      state.authenticated = false;
    },
    loading(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    error(state) {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authSlice;
