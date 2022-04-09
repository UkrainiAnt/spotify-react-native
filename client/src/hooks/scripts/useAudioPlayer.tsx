import React from 'react';
import { useState } from 'react';
import { Audio } from 'expo-av';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { AudioParamsActios, SelectSongActions } from 'store/actions';
import { audioParamsSelector } from 'store/selectors/audio-params.selector';
import { Sound } from 'expo-av/build/Audio';
import { currentSongSelector } from 'store/selectors/current-song.selector';

const useAudioPlayer = () => {
	const { currentTime, fullTime, paused, volume } =
		useAppSelector(audioParamsSelector);

	const { currentSong } = useAppSelector(currentSongSelector);
	const [sound, setSound] = useState<Sound | null>(null);

	const dispatch = useAppDispatch();

	async function playSound() {
		console.log('Loading Sound');
		const { sound, status } = await Audio.Sound.createAsync(
			{
				uri:
					'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61' ||
					'',
			},
			{ shouldPlay: true },
		);

		setSound(sound);
		dispatch(AudioParamsActios.setPaused(false));
		await sound.playAsync();
		console.log(status);
	}

	async function pauseSound() {
		await sound?.pauseAsync();

		dispatch(AudioParamsActios.setPaused(true));
	}

	const playOrPauseSound = async () => {
		if (paused) {
			await playSound();
		} else {
			await pauseSound();
		}
	};

	return { playOrPauseSound };
};

export default useAudioPlayer;
