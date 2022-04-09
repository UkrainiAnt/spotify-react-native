import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IMoreTabItem } from 'models';
import { colors } from 'variables';
import { TouchableOpacityAndScale } from 'components/shared/containers/index';

interface MoreListItemProps extends IMoreTabItem {
	onPress: () => void;
}

const MoreListItem: React.FC<MoreListItemProps> = props => {
	const { Icon, onPress, text } = props;

	return (
		<Pressable style={styles.wrapper}>
			<TouchableOpacityAndScale
				style={styles.container}
				onPress={onPress}
				scaleTo={0.95}
			>
				<View style={styles.icon}>{Icon}</View>

				<Text style={styles.title}>{text}</Text>
			</TouchableOpacityAndScale>
		</Pressable>
	);
};

export default MoreListItem;

const styles = StyleSheet.create({
	wrapper: {
		padding: 16,
		borderBottomColor: '#121212',
		backgroundColor: '#212121',
	},
	container: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	title: {
		fontSize: 17,
		fontWeight: 'bold',
		color: colors.white,
	},
	icon: {
		width: 45,
	},
});
