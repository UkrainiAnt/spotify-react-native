import React from 'react';
import { Slider } from 'react-native-elements';

const SongSlider = () => {
	return (
		<Slider
			style={{ height: 3 }}
			animationType='spring'
			maximumTrackTintColor='#3f3f3f'
			minimumTrackTintColor='#b3b3b3'
			thumbTintColor={'#b3b3b3'}
			thumbStyle={{ width: 0, height: 0 }}
		/>
	);
};

export default SongSlider;
