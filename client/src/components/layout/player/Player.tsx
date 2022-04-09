import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { currentSongSelector } from 'store/selectors/current-song.selector';

import { PlayerActions } from './';
import { colors } from 'variables';

const Player = () => {
	const { currentSong } = useAppSelector(currentSongSelector);

	if (currentSong) {
		return <></>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<PlayerActions />
			</View>
		</View>
	);
};

export default Player;

const styles = StyleSheet.create({
	image: {
		width: 45,
		height: 45,
		borderRadius: 6,
	},
	wrapper: {
		padding: 9,
		height: 60,

		paddingHorizontal: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	container: {
		width: Dimensions.get('window').width,
		backgroundColor: colors.tabsColor,
		position: 'relative',
		borderBottomColor: '#343434',
		borderBottomWidth: 1.4,
	},
});
