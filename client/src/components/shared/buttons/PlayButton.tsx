import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { IconButton } from 'components/shared/buttons';
import { useToggle } from 'hooks';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { colors } from 'variables';

interface PlayButtonProps {
	isPlaying: boolean;
	outlined?: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = props => {
	const { outlined = false } = props;
	const [playing, togglePlaying] = useToggle(false);

	const iconName = playing ? 'md-pause' : 'play';

	return (
		<>
			{!outlined ? (
				<Pressable onPress={togglePlaying} style={styles.wrapper}>
					<Ionicons name={iconName} size={28} />
				</Pressable>
			) : (
				<IconButton
					onPress={togglePlaying}
					Icon={
						<FontAwesome5
							name={playing ? 'pause' : 'play'}
							size={20}
							color={colors.text}
						/>
					}
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
