import { MaterialIcons } from '@expo/vector-icons';
import { IconButton, LikeButton, PlayButton } from 'components/shared/buttons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';

interface SongActionProps {
	isPlayed: boolean;
}

const SongAction: React.FC<SongActionProps> = props => {
	const { isPlayed } = props;
	return (
		<View style={styles.wrapper}>
			<PlayButton isPlaying outlined />

			{!isPlayed ? (
				<IconButton
					style={{ marginLeft: 5 }}
					Icon={
						<MaterialIcons
							name='more-vert'
							size={26}
							color={colors.secondary}
						/>
					}
				/>
			) : (
				<LikeButton />
			)}
		</View>
	);
};

export default SongAction;

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
