import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { IconButton, PlayButton } from 'components/shared/buttons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';
import { useRouting } from 'hooks';
import { IAlbum } from 'models';

interface AlbumActionsProps {
	album: IAlbum;
}

const Actions: React.FC<AlbumActionsProps> = props => {
	const { album } = props;
	const { navigateTo } = useRouting();

	return (
		<View style={styles.wrapper}>
			<View style={styles.iconWrapper}>
				<IconButton
					style={{ marginRight: 7 }}
					Icon={<FontAwesome5 name='heart' size={24} color={colors.white} />}
				/>

				<IconButton
					style={{ marginRight: 7 }}
					onPress={navigateTo('album_more', { album })}
					Icon={
						<MaterialIcons name='more-vert' size={24} color={colors.white} />
					}
				/>
			</View>

			<PlayButton isPlaying={false} />
		</View>
	);
};

export default Actions;

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 4,
		justifyContent: 'space-between',
	},

	iconWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
