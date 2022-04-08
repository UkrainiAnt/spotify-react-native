import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Player } from '../player';
import { SingleTab } from '.';
import { default as fakeTabs, gradiesntColors } from './fakeTabs';

export const Tabs = () => {
	const tabsComponents = fakeTabs.map(tab => (
		<SingleTab key={tab.to} tab={tab} />
	));

	return (
		<View style={styles.absoluteWrapper}>
			<Player />
			<LinearGradient
				start={{ y: 0, x: 1 }}
				end={{ y: 1, x: 1 }}
				colors={gradiesntColors}
				style={styles.wrapper}
			>
				{tabsComponents}
			</LinearGradient>
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
	},

	absoluteWrapper: {
		position: 'absolute',
		bottom: -5,
	},
});

export { default as SingleTab } from './SingleTab';
