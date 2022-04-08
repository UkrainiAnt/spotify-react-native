import { SongText } from 'components/shared/typography';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { currentSongSelector } from 'store/selectors/current-song.selector';

import { PlayerActions, SongSlider } from './';

const Player = () => {
	const { currentSong } = useAppSelector(currentSongSelector);

	if (currentSong) {
		return <></>;
	}

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', position: 'absolute', margin: 7 }}>
				<Image
					source={{
						uri: 'https://lh3.googleusercontent.com/ogw/ADea4I48z9yuFML_6oXpvb0YLf6Cz3MSVreIPJSCib5BXQ=s32-c-mo',
					}}
					style={styles.image}
				/>

				<SongText
					subtitle='some subtitle'
					maxWidth={65}
					title={(currentSong as any)?.name || 'not found'}
				/>
			</View>

			<View style={styles.wrapper}>
				<PlayerActions />
			</View>

			<SongSlider />
		</View>
	);
};

export default Player;

const styles = StyleSheet.create({
	image: {
		width: 45,
		height: 45,
		borderRadius: 6,
	},
	wrapper: {
		padding: 9,
		height: 60,

		paddingHorizontal: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	container: {
		borderRadius: 12,
		overflow: 'hidden',
		marginHorizontal: 12,
		width: Dimensions.get('window').width - 24,
		backgroundColor: '#212121',
		position: 'relative',
	},
});
