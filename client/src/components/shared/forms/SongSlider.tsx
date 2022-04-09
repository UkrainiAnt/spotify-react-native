import React from 'react';
import { Slider } from 'react-native-elements';
import { colors } from 'variables';

const SongSlider = () => {
	return (
		<Slider
			style={{ height: 3, width: '100%' }}
			animationType='spring'
			maximumTrackTintColor={colors.trackColor}
			minimumTrackTintColor={colors.progressColor}
			thumbTintColor={colors.progressColor}
			thumbStyle={{ width: 10, height: 10 }}
		/>
	);
};

export default SongSlider;
