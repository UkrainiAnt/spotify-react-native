import { AlbumActionContent } from 'components/pages/album_action';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';

function AlbumActionScreen() {
	return (
		<View style={styles.wrapper}>
			<AlbumActionContent />
		</View>
	);
}

export default AlbumActionScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.bg,
	},
});
