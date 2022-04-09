import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import { SongSlider } from 'components/shared/forms';
import { toHHMMSS } from 'helpers';
import { Subtitle } from 'components/shared/typography';

const screenWidth = Dimensions.get('screen').width;

const AlbumPlayer = () => {
	return (
		<View style={styles.wrapper}>
			<View style={{ width: screenWidth - 50 }}>
				<SongSlider />
				<View style={styles.secondsContainer}>
					<Subtitle fontSize={12}>{toHHMMSS(0)}</Subtitle>
					<Subtitle fontSize={12}>{toHHMMSS(322)}</Subtitle>
				</View>
			</View>
		</View>
	);
};

export default AlbumPlayer;

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 25,
		paddingBottom: 0,
	},

	secondsContainer: {
		flexDirection: 'row',
		paddingVertical: 4,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
