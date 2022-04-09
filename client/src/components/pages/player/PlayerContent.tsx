import { StyleSheet } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ISong } from 'models';
import { PresentAlbumOrSong } from 'components/shared/widgets/presentation';
import { colors } from 'variables';
import {
	AudioAdditions,
	AudioPlayer,
	AudioPlayerControllers,
	PlayerHeader,
} from '.';
import { LinearGradient } from 'expo-linear-gradient';

const PlayerContent = () => {
	const {
		params: { song },
	} = useRoute<RouteProp<{ params: { song: ISong } }>>();

	return (
		<LinearGradient
			style={styles.wrapper}
			colors={['#f8717190', '#f8717170', '#000000']}
		>
			<PlayerHeader song={song} />
			<PresentAlbumOrSong
				image={song.picture}
				imageSize={350}
				marginTop={25}
				name={song.author?.name || ''}
				title={song.name}
				imageStyle={{ borderRadius: 6, marginBottom: 50 }}
				textWrapperStyle={{
					width: '100%',
					alignItems: 'flex-start',
					paddingHorizontal: 30,
				}}
			/>

			<AudioPlayer />
			<AudioPlayerControllers />
			<AudioAdditions />
		</LinearGradient>
	);
};

export default PlayerContent;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.bg,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
