import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IAlbum } from 'models';
import { PresentAlbumOrSong } from 'components/shared/widgets/presentation';
import { MappedMoreItems } from './';

const AlbumMoreContent = () => {
	const {
		params: { album },
	} = useRoute<RouteProp<{ params: { album: IAlbum } }>>();
	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<PresentAlbumOrSong
					name={album.author?.name || ''}
					image={album.picture}
					title={album.name}
				/>
			</View>
			<MappedMoreItems />
		</View>
	);
};

export default AlbumMoreContent;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
