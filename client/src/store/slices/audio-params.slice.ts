import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface SoundAttributesSliceState {
	currentTime: number;
	fullTime: number;
	paused: boolean;
	volume: number;
}

const initialState: SoundAttributesSliceState = {
	currentTime: 0,
	fullTime: 0,
	paused: false,
	volume: 0,
};

const slice = createSlice({
	name: 'SoundSlice',
	initialState,
	reducers: {
		setCurrentTime: (state, action: PayloadAction<number>) => {
			state.currentTime = action.payload;
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload;
		},

		setFullTime: (state, action: PayloadAction<number>) => {
			state.fullTime = action.payload;
		},

		setPaused: (state, action: PayloadAction<boolean>) => {
			state.paused = action.payload;
		},
	},
});

export default slice.reducer;
export const AudioParamsActios = slice.actions;
