import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DescriptionDates, DescriptionsActions } from '.';
import { useAuthState } from 'hooks';
import { colors } from 'variables';
import { AuthorsList } from '.';
import { IAlbum } from 'models';

interface AlbumDetailProps {
	album: IAlbum;
}

const AlbumDetail: React.FC<AlbumDetailProps> = props => {
	const { album } = props;
	const { user } = useAuthState();

	return (
		<View style={styles.titlesWrapper}>
			<Text style={styles.title}>{album.name}</Text>

			<DescriptionsActions album={album} />

			<DescriptionDates
				createdAt={album.createdAt}
				updatedAt={album.updatedAt}
			/>
			{user && <AuthorsList users={[user]} />}
		</View>
	);
};

export default React.memo(AlbumDetail);

const styles = StyleSheet.create({
	title: {
		fontSize: 27,
		marginTop: 12,
		fontWeight: 'bold',
		color: colors.text,
	},
	titlesWrapper: {
		width: '100%',
		paddingHorizontal: 20,
	},
});
