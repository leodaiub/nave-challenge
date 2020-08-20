import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.navers || initialState;

export const selectNavers = createSelector(
  [selectDomain],
  naversState => naversState,
);
