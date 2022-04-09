import { useRouting } from 'hooks';
import { IAlbum } from 'models';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from 'variables';

interface AlbumProps {
	album: IAlbum;
	numberOfLines?: number;
}

const Album: React.FC<AlbumProps> = props => {
	const { album, numberOfLines = 2 } = props;
	const { navigateTo } = useRouting();

	return (
		<Pressable
			onPress={navigateTo('album', { album: album })}
			style={styles.wrapper}
		>
			<Image style={styles.image} source={{ uri: album.picture }} />

			<Text numberOfLines={numberOfLines} style={styles.title}>
				{album.name}
			</Text>
		</Pressable>
	);
};

export default Album;

const styles = StyleSheet.create({
	wrapper: {
		marginRight: 15,
		width: 150,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 4,
	},

	title: {
		color: colors.secondary,
		fontSize: 16,
		marginTop: 7,
		fontWeight: 'bold',
	},
});
