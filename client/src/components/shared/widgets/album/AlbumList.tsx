import { IAlbum } from 'models';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from 'react-native-elements';

import { Album } from '.';

interface AlbumListProps {
	title: string;
	albums: IAlbum[];
}

const AlbumList: React.FC<AlbumListProps> = props => {
	const { albums, title } = props;

	const albumComponents = albums.map(album => (
		<Album key={album.id} album={album} />
	));

	return (
		<View style={styles.contanier}>
			<Text style={styles.title}>{title}</Text>
			<ScrollView
				style={styles.wrapper}
				showsHorizontalScrollIndicator={false}
				horizontal
			>
				{albumComponents}
			</ScrollView>
		</View>
	);
};

export default AlbumList;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		marginBottom: 20,
	},
	contanier: {
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 3,
	},
	title: {
		fontSize: 22,
		color: colors.white,
		marginBottom: 20,
		fontWeight: 'bold',
	},
});
