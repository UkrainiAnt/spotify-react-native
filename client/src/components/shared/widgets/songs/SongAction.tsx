import { MaterialIcons } from '@expo/vector-icons';
import { IconButton, LikeButton, PlayButton } from 'components/shared/buttons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';
import { useRouting } from 'hooks';
import { ISong } from 'models';

interface SongActionProps {
	song: ISong;
}

const SongAction: React.FC<SongActionProps> = props => {
	const { song } = props;
	const { navigateTo } = useRouting();

	return (
		<View style={styles.wrapper}>
			<PlayButton isPlaying outlined />
			<IconButton
				onPress={navigateTo('song_more', { song })}
				style={{ marginLeft: 5 }}
				Icon={
					<MaterialIcons name='more-vert' size={26} color={colors.secondary} />
				}
			/>
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
