import { StyleSheet, Text } from 'react-native';
import React, { ReactElement } from 'react';
import { colors } from 'variables';

interface TitleProps {
	fontSize?: number;
	color?: keyof typeof colors;
	children?: ReactElement<any, any> | string;
	numberOfLines?: number;
}

const Title: React.FC<TitleProps> = props => {
	const { color = 'white', fontSize = 19, children, numberOfLines = 1 } = props;

	const styles = StyleSheet.create({
		title: {
			fontSize,
			color: colors[color],
			fontWeight: 'bold',
		},
	});

	return (
		<Text numberOfLines={numberOfLines} style={styles.title}>
			{children}
		</Text>
	);
};

export default Title;
