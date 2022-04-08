import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';

import { Tabs } from './tabs';

export const Layout: React.FC = props => {
	const { children } = props;

	return (
		<View style={styles.wrapper}>
			{children}
			<Tabs />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.bg,
	},
});

export { Player } from './player';
