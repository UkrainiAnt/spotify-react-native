import { FontAwesome5 } from '@expo/vector-icons';
import { IconButton } from 'components/shared';
import { LikeButton, PlayButton } from 'components/shared/buttons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';

const PlayerActions = () => {
	return (
		<View style={styles.wrapper}>
			<IconButton
				style={{}}
				Icon={
					<FontAwesome5 name='backward' size={20} color={colors.secondary} />
				}
			/>

			<View style={{ paddingHorizontal: 12 }}>
				<PlayButton isPlaying outlined />
			</View>

			<IconButton
				Icon={
					<FontAwesome5 name='forward' size={20} color={colors.secondary} />
				}
			/>

			<View style={styles.absoluteWrapper}>
				<LikeButton style={{ marginRight: 8 }} />

				<IconButton
					Icon={
						<FontAwesome5
							name='external-link-alt'
							size={20}
							color={colors.secondary}
						/>
					}
				/>
			</View>
		</View>
	);
};

export default PlayerActions;

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',

		flexDirection: 'row',
	},

	absoluteWrapper: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		right: 0,
	},
});
