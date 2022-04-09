import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ISong } from 'models';
import { IconButton } from 'components/shared/buttons';
import { colors } from 'variables';
import { useRouting } from 'hooks';

import { Subtitle, Title } from 'components/shared/typography';

interface AudioHeaderProps {
	song: ISong;
}

const AudioHeader: React.FC<AudioHeaderProps> = props => {
	const { song } = props;
	const { backRouter, navigateTo } = useRouting();

	return (
		<View style={styles.wrapper}>
			<IconButton
				onPress={backRouter(true)}
				Icon={<Feather name='chevron-down' size={35} color={colors.white} />}
			/>

			<View style={styles.textContainer}>
				<Title fontSize={16}>{song.name}</Title>
				<Subtitle>{song.author?.name || ''}</Subtitle>
			</View>

			<IconButton
				onPress={navigateTo('song_more', {})}
				Icon={<Feather name='more-vertical' size={27} color={colors.white} />}
			/>
		</View>
	);
};

export default AudioHeader;

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		paddingTop: 40,
		flexDirection: 'row',
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
