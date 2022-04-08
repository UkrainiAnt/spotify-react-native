import { useRouting } from 'hooks';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from 'variables';

interface UserBadgeProps {
	picture: string;
	name: string;
	userId: number;
}

const UserBadge: React.FC<UserBadgeProps> = props => {
	const { name, picture, userId } = props;
	const { navigateTo } = useRouting();

	return (
		<Pressable
			onPress={navigateTo('profile', { userId })}
			style={styles.wrapper}
		>
			<Image style={styles.image} source={{ uri: picture }} />

			<Text style={styles.title}>{name.split(' ')[0]}</Text>
		</Pressable>
	);
};

export default UserBadge;

const styles = StyleSheet.create({
	wrapper: {
		padding: 5,
		paddingLeft: 0,
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 45,
		height: 45,
		borderRadius: 50,
		marginRight: 8
	},
	title: {
		fontSize: 17,
		color: colors.white
	}
});
