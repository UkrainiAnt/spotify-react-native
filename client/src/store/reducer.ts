import { combineReducers } from 'redux';

import { default as currentSongReducer } from './slices/select-song.slice';

export const rootReducer = combineReducers({
	currentSong: currentSongReducer,
});
