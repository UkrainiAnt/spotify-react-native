import { RouteProp, useRoute } from '@react-navigation/native';
import { Categories } from 'components/shared/widgets/album';
import { SongTable } from 'components/shared/widgets/songs';
import { LinearGradient } from 'expo-linear-gradient';
import { fakeAlbums } from 'mocks';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';
import { AlbumDetail } from './description';
import { ScrollContainer } from 'components/shared/containers';

import { AlbumPageHeader, AlbumPicture } from '.';
import { IAlbum } from 'models';

const AlbumScreenContent = () => {
	const {
		params: { album },
	} = useRoute<RouteProp<{ params: { album: IAlbum } }>>();

	return (
		<ScrollContainer style={styles.container}>
			<LinearGradient
				style={styles.wrapper}
				colors={['#f87171', '#f8717150', '#000000']}
			>
				<AlbumPageHeader albumId={album.id} />

				<AlbumPicture album={album} />

				<AlbumDetail album={album} />
			</LinearGradient>

			<SongTable songs={album?.songs || []} />

			<View style={{ paddingTop: 20 }}>
				<Categories categories={fakeAlbums} />
			</View>
		</ScrollContainer>
	);
};

export default AlbumScreenContent;

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: 20,

		backgroundColor: colors.bg,
		flex: 1,
		width: '100%',
	},

	container: {
		flex: 1,
	},
	title: {
		color: colors.white,
		fontSize: 30,
	},
});
