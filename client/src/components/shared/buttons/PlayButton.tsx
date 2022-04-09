import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { IconButton } from 'components/shared/buttons';
import { useToggle } from 'hooks';
import { ISong } from 'models';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from 'variables';

interface PlayButtonProps {
	isPlaying: boolean;
	outlined?: boolean;
	song?: ISong;
	filled?: boolean;
	size?: number;
}

const PlayButton: React.FC<PlayButtonProps> = props => {
	const { outlined = false, filled = false, size = 28 } = props;
	const [playing, togglePlaying] = useToggle(false);

	const iconName = playing ? 'md-pause' : 'play';
	const filledIconName = playing ? 'play-circle' : 'pause-circle';

	return (
		<>
			{outlined ? (
				<IconButton
					onPress={togglePlaying}
					Icon={
						<FontAwesome5
							name={playing ? 'pause' : 'play'}
							size={size * 0.73}
							color={colors.text}
						/>
					}
				/>
			) : filled ? (
				<IconButton
					Icon={
						<Ionicons name={filledIconName} color={colors.white} size={size} />
					}
					onPress={togglePlaying}
				/>
			) : (
				<IconButton
					Icon={<Ionicons name={iconName} size={size} />}
					onPress={togglePlaying}
					style={styles.wrapper}
				/>
			)}
		</>
	);
};

export default PlayButton;

const styles = StyleSheet.create({
	wrapper: {
		width: 55,
		height: 55,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#22c55e',
		borderRadius: 50,
	},
});
