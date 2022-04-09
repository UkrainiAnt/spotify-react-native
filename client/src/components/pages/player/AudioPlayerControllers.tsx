import { StyleSheet, View } from 'react-native';
import React from 'react';
import { IconButton, LikeButton } from 'components/shared/buttons';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from 'variables';
import { PlayButton } from 'components/shared/buttons';

const AudioPlayerControllers = () => {
	return (
		<View style={styles.wrapper}>
			<LikeButton size={30} />

			<IconButton
				Icon={<FontAwesome5 name='backward' size={30} color={colors.white} />}
			/>

			<PlayButton isPlaying filled size={80} />

			<IconButton
				Icon={<FontAwesome5 name='forward' size={28} color={colors.white} />}
			/>

			<IconButton
				Icon={
					<MaterialCommunityIcons
						name='minus-circle-outline'
						size={35}
						color={colors.white}
					/>
				}
			/>
		</View>
	);
};

export default AudioPlayerControllers;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 25,

		alignItems: 'center',
		paddingVertical: 10,
	},
});
