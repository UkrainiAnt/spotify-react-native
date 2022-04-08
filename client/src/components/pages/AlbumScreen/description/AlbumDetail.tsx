import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DescriptionDates, DescriptionsActions } from '.';
import { useAuthState } from 'hooks';
import { colors } from 'variables';
import { AuthorsList } from '.';

interface AlbumDetailProps {
	albumName: string;
	createdAt: Date;
	updatedAt: Date;
}

const AlbumDetail: React.FC<AlbumDetailProps> = props => {
	const { albumName, createdAt, updatedAt } = props;
	const { user } = useAuthState();

	return (
		<View style={styles.titlesWrapper}>
			<Text style={styles.title}>{albumName}</Text>

			<DescriptionsActions albumId={2} />

			<DescriptionDates createdAt={createdAt} updatedAt={updatedAt} />
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
