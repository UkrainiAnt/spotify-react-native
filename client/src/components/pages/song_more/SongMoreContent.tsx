import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ISong } from 'models';
import { PresentAlbumOrSong } from 'components/shared/widgets/presentation';
import { MappedSongMoreItems } from '.';

const SongActionContent = () => {
	const {
		params: { song },
	} = useRoute<RouteProp<{ params: { song: ISong } }>>();

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<PresentAlbumOrSong
					image={song.picture}
					name={song.author?.name || ''}
					title={song.name}
				/>
			</View>
			<MappedSongMoreItems />
		</View>
	);
};

export default SongActionContent;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
