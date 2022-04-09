import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { IconButton } from 'components/shared';
import { colors } from 'variables';

const AudioAdditions = () => {
	return (
		<View style={styles.wrapper}>
			<IconButton
				Icon={
					<MaterialCommunityIcons
						name='cloud-download'
						size={30}
						color={colors.white}
					/>
				}
			/>

			<IconButton
				Icon={<Ionicons name='share-social' size={30} color={colors.white} />}
			/>
		</View>
	);
};

export default AudioAdditions;

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 25,
		paddingVertical: 15,
	},
});
