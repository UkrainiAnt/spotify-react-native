import { LikeButton, PlayButton } from 'components/shared/buttons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { fakeSong } from 'mocks/fakeSongs';
import { default as fakeUser } from 'mocks/fakeUser';
import { SongText } from 'components/shared/typography';
import { TouchableOpacityAndScale } from 'components/shared/containers';
import { useRouting } from 'hooks';

const PlayerActions = () => {
	const { navigateTo } = useRouting();

	return (
		<View style={styles.wrapper}>
			<View style={styles.songWrapper}>
				<TouchableOpacityAndScale
					scaleTo={0.95}
					onPress={navigateTo('player', { song: fakeSong })}
				>
					<Image style={styles.image} source={{ uri: fakeUser.picture }} />
				</TouchableOpacityAndScale>

				<SongText subtitle={fakeSong.name} title={fakeSong.name} />

				<LikeButton style={{ marginRight: 12 }} />

				<PlayButton isPlaying outlined />
			</View>
		</View>
	);
};

export default PlayerActions;

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},

	songWrapper: {
		alignItems: 'center',
		flexDirection: 'row',
	},

	absoluteWrapper: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		right: 0,
	},

	image: { width: 40, height: 40, borderRadius: 3 },
});
