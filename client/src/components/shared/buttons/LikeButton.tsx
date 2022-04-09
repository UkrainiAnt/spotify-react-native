import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { IconButton } from 'components/shared/buttons';
import { useToggle } from 'hooks';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { colors } from 'variables';

interface LikeButtonProps {
	style?: ViewStyle;
	size?: number;
}

const LikeButton: React.FC<LikeButtonProps> = props => {
	const { style = {}, size = 21 } = props;

	const [isLiked, toggleLiked] = useToggle(false);

	return (
		<View style={style}>
			{isLiked ? (
				<IconButton
					onPress={toggleLiked}
					Icon={<FontAwesome name='heart' size={size} color={colors.text} />}
				/>
			) : (
				<IconButton
					onPress={toggleLiked}
					Icon={<FontAwesome5 name='heart' size={size} color={colors.text} />}
				/>
			)}
		</View>
	);
};

export default LikeButton;
