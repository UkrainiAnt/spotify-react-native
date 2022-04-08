import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const currentSongSelector = createSelector(
	(state: RootState) => state.currentSong,
	currentSong => currentSong,
);
