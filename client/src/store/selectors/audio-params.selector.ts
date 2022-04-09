import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const currentTimeSelector = createSelector(
	(state: RootState) => state.audioParams,
	audioParams => audioParams.currentTime,
);

export const fullTimeSelector = createSelector(
	(state: RootState) => state.audioParams,
	audioParams => audioParams.fullTime,
);

export const pausedSelector = createSelector(
	(state: RootState) => state.audioParams,
	audioParams => audioParams.paused,
);

export const volumeSelector = createSelector(
	(state: RootState) => state.audioParams,
	audioParams => audioParams.volume,
);

export const audioParamsSelector = createSelector(
	(state: RootState) => state.audioParams,
	audioParams => audioParams,
);
