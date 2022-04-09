import { TouchableWithoutFeedback } from 'react-native';
import Animated, {
	Easing,
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import React from 'react';
import { TouchableScaleProps } from './shared';

export const TimignConfig = {
	duration: 50,
	easing: Easing.linear,
};

const TouchableScale: React.FC<TouchableScaleProps> = props => {
	const {
		children,
		disabled = false,
		style = {},
		scaleTo,
		onPress = () => {
			return;
		},
	} = props;

	const pressed = useSharedValue(false);
	const progress = useDerivedValue(() =>
		pressed.value ? withTiming(1, TimignConfig) : withTiming(0, TimignConfig),
	);

	const animatedStyle = useAnimatedStyle(() => {
		const scale = interpolate(
			progress.value,
			[0, 1],
			[1, scaleTo],
			Extrapolate.CLAMP,
		);

		const opacity = interpolate(
			progress.value,
			[0, 1],
			[1, 0.6],
			Extrapolate.CLAMP,
		);

		return {
			transform: [{ scale }],
			opacity,
		};
	});

	return (
		<TouchableWithoutFeedback
			onPressIn={() => {
				pressed.value = true;
			}}
			onPressOut={() => {
				pressed.value = false;
				onPress();
			}}
			disabled={disabled}
		>
			<Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
		</TouchableWithoutFeedback>
	);
};

export default TouchableScale;
