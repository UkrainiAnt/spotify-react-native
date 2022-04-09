import { StyleSheet, View } from 'react-native';
import React from 'react';
import { PlayerContent } from 'components/pages/player';

const PlayerScreen = () => {
	return (
		<View style={styles.wrapper}>
			<PlayerContent />
		</View>
	);
};

export default PlayerScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});
