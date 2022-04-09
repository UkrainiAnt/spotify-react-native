import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SongMoreContent } from 'components/pages/song_more';
import { colors } from 'variables';

const SongMoreScreen = () => {
	return (
		<View style={styles.wrapper}>
			<SongMoreContent />
		</View>
	);
};

export default SongMoreScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.bg,
	},
});
