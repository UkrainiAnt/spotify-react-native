import { ISong } from 'models';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { SongText } from '../typography';
import { SongActions } from './';

interface SongProps {
	song: ISong;
}

const Song: React.FC<SongProps> = props => {
	const { song } = props;

	return (
		<View style={styles.wrapper}>
			<Image style={styles.image} source={{ uri: song.picture }} />

			<SongText title={song.name} subtitle={song.name + ' placeholder'} />

			<SongActions isPlayed={false} />
		</View>
	);
};

export default Song;

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',

		paddingVertical: 8,
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 4,
	},
});
