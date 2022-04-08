import { Tabs } from 'components/layout/tabs';
import { Content } from 'components/pages/AlbumScreen';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';

const AlbumScreen = () => {
	return (
		<View style={styles.wrapper}>
			<Content />
			<Tabs />
		</View>
	);
};

export default AlbumScreen;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: colors.bg,
		flex: 1
	}
});
