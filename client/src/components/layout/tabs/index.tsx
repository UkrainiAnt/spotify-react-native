import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Player } from '../player';
import { SingleTab } from '.';
import { default as fakeTabs } from './fakeTabs';
import { colors } from 'variables';

export const Tabs = () => {
	const tabsComponents = fakeTabs.map(tab => (
		<SingleTab key={tab.to} tab={tab} />
	));

	return (
		<View style={styles.absoluteWrapper}>
			<Player />
			<View style={styles.wrapper}>{tabsComponents}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		width: Dimensions.get('window').width,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		paddingVertical: 10,
		paddingBottom: 20,
		backgroundColor: colors.tabsColor,
	},

	absoluteWrapper: {
		position: 'absolute',
		bottom: -5,
		backgroundColor: colors.tabsColor,
	},
});

export { default as SingleTab } from './SingleTab';
