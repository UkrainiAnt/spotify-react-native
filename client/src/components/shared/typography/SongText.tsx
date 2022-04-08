import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'variables';

interface SongTextProps {
	title: string;
	subtitle: string;
	maxWidth?: number;
}

const SongText: React.FC<SongTextProps> = props => {
	const { subtitle, title, maxWidth } = props;

	return (
		<View style={{ ...styles.textWrapper, maxWidth }}>
			<Text numberOfLines={1} style={styles.name}>
				{title}
			</Text>
			<Text numberOfLines={1} style={styles.desc}>
				{subtitle}
			</Text>
		</View>
	);
};

export default SongText;

const styles = StyleSheet.create({
	textWrapper: {
		flex: 1,
		marginLeft: 10,
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.text,
	},
	desc: {
		fontSize: 12,
		color: colors.lightGray,
	},
});
