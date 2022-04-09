import { combineReducers } from 'redux';

import { default as audioParamsReducer } from './slices/audio-params.slice';
import { default as currentSongReducer } from './slices/select-song.slice';

export const rootReducer = combineReducers({
	currentSong: currentSongReducer,
	audioParams: audioParamsReducer,
});
