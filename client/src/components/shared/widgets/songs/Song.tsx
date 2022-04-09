import { ISong } from 'models';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacityAndScale } from 'components/shared/containers';

import { SongText } from '../../typography';
import { SongActions } from '.';
import { useRouting } from 'hooks';

interface SongProps {
	song: ISong;
}

const Song: React.FC<SongProps> = props => {
	const { song } = props;
	const { navigateTo } = useRouting();

	return (
		<View style={styles.wrapper}>
			<TouchableOpacityAndScale
				scaleTo={0.95}
				onPress={navigateTo('player', { song })}
			>
				<Image style={styles.image} source={{ uri: song.picture }} />
			</TouchableOpacityAndScale>

			<SongText title={song.name} subtitle={song.author?.name || ''} />

			<SongActions song={song} />
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
