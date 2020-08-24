import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Navers container
export const initialState: ContainerState = {
  navers: [],
  naver: {},
  loading: false,
  error: false,
};

const naversSlice = createSlice({
  name: 'navers',
  initialState,
  reducers: {
    getNavers(state) {
      state.loading = true;
    },
    getNaversSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.navers = action.payload;
    },
    showNaver(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    showNaverSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.naver = action.payload;
    },
    createNaver(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    createNaverSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.navers.unshift(action.payload);
    },
    updateNaver(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    updateNaverSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      let naver = state.navers.findIndex(
        naver => naver.id === action.payload.id,
      );
      state.navers[naver] = action.payload;
      state.loading = false;
    },
    deleteNaver(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    deleteNaverSuccess(state, action: PayloadAction<any>) {
      state.navers = state.navers.filter(naver => naver.id !== action.payload);
      state.loading = false;
    },
    error(state) {
      state.error = true;
      state.loading = false;
    },
    loading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = naversSlice;
