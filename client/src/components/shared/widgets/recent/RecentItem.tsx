import { Image, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { IAlbum } from 'models';
import { colors } from 'variables';
import { useRouting } from 'hooks';

interface RecentItemProps {
	item: IAlbum;
}

const RecentItem: React.FC<RecentItemProps> = props => {
	const { item } = props;

	const { navigateTo } = useRouting();

	return (
		<Pressable
			onPress={navigateTo('album', { albumId: item.id })}
			style={{ width: 100, margin: 8, marginTop: 20 }}
		>
			<Image style={styles.image} source={{ uri: item.picture }} />
			<Text numberOfLines={2} style={styles.title}>
				{item.name}
			</Text>
		</Pressable>
	);
};

export default RecentItem;

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
		borderRadius: 4,
	},
	title: {
		fontSize: 15,
		color: colors.secondary,
	},
});
