import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISong } from 'models';

interface SelectSongSliceState {
	currentSong: ISong | null;
	currentIndex: number;
	queue: ISong[];
}

const initialState: SelectSongSliceState = {
	currentIndex: 0,
	currentSong: null,
	queue: [],
};

const slice = createSlice({
	name: 'selectTrack',
	initialState,
	reducers: {
		selectSong: (state, action: PayloadAction<[ISong, number]>) => {
			state.currentIndex = action.payload[1];
			state.currentSong = action.payload[0];
		},

		removeCurrentSong: state => {
			(state.currentSong = null), (state.currentIndex = 0);
		},

		setQueue: (state, action: PayloadAction<ISong[]>) => {
			state.queue = action.payload;
		},

		forwardSong: state => {
			if (!state.queue[state.currentIndex + 1]) {
				state.currentSong = state.queue[0];
				state.currentIndex = 0;
			} else {
				state.currentSong = state.queue[state.currentIndex + 1];
				state.currentIndex++;
			}
		},
		backwardSong: state => {
			if (!state.queue[state.currentIndex - 1]) {
				state.currentSong = state.queue[state.queue.length - 1];
				state.currentIndex = state.queue.length - 1;
			} else {
				state.currentSong = state.queue[state.currentIndex - 1];
				state.currentIndex--;
			}
		},
	},
});

export default slice.reducer;
export const SelectSongActions = slice.actions;
