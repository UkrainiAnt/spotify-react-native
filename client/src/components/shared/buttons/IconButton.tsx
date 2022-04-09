import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { ReactElement } from 'react';
import { TouchableOpacityAndScale } from 'components/shared/containers';

interface IconButtonProps {
	Icon: ReactElement<any, any>;
	onPress?: () => void;
	style?: ViewStyle;
	isButton?: boolean;
	isRounded?: boolean;
	disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = props => {
	const {
		Icon,
		onPress,
		style = {},
		isButton = false,
		isRounded = false,
		disabled = false,
	} = props;

	if (isButton) {
		return (
			<TouchableOpacityAndScale
				onPress={onPress}
				disabled={disabled}
				scaleTo={0.9}
				style={{ ...style, borderRadius: isRounded ? 50 : 0 }}
			>
				{Icon}
			</TouchableOpacityAndScale>
		);
	}

	return (
		<TouchableOpacity style={style} onPress={onPress}>
			{Icon}
		</TouchableOpacity>
	);
};

export default IconButton;
