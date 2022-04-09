import { AlbumMoreContent } from 'components/pages/album_more';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';

function AlbumActionScreen() {
	return (
		<View style={styles.wrapper}>
			<AlbumMoreContent />
		</View>
	);
}

export default React.memo(AlbumActionScreen);

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.bg,
	},
});
