import { RouteProp, useRoute } from '@react-navigation/native';
import { Categories } from 'components/shared/album';
import { SongTable } from 'components/shared/songs';
import { LinearGradient } from 'expo-linear-gradient';
import { fakeAlbums, fakeDetailAlbum } from 'mocks';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';
import { AlbumDetail } from './description/';
import { ScrollContainer } from 'components/shared/containers';

import { AlbumPageHeader, AlbumPicture } from './';

const AlbumScreenContent = () => {
	const {
		params: { albumId },
	} = useRoute<RouteProp<{ params: { albumId: number } }>>();

	return (
		<ScrollContainer style={styles.container}>
			<LinearGradient
				style={styles.wrapper}
				colors={['#f87171', '#f8717130', '#000000']}
			>
				<AlbumPageHeader albumId={albumId} />

				<AlbumPicture album={fakeDetailAlbum} />

				<AlbumDetail
					albumName={fakeDetailAlbum.name}
					createdAt={fakeDetailAlbum.createdAt}
					updatedAt={fakeDetailAlbum.createdAt}
				/>

				<SongTable songs={fakeDetailAlbum?.tracks || []} />
			</LinearGradient>

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
