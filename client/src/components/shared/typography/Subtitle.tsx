import { StyleSheet, Text } from 'react-native';
import React, { ReactElement } from 'react';
import { colors } from 'variables';

interface SubtitleProps {
	fontSize?: number;
	color?: keyof typeof colors;
	children?: ReactElement<any, any> | string;
	numberOfLines?: number;
}

const Subtitle: React.FC<SubtitleProps> = props => {
	const {
		color = 'lightText',
		fontSize = 14,
		children,
		numberOfLines = 1,
	} = props;

	const styles = StyleSheet.create({
		subtitle: {
			fontSize,
			color: colors[color],
			fontWeight: 'bold',
		},
	});

	return (
		<Text numberOfLines={numberOfLines} style={styles.subtitle}>
			{children}
		</Text>
	);
};

export default Subtitle;
