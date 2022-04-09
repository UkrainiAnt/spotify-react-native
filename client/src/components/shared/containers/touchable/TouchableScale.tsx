import { TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Animated, {
	Easing,
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import { TouchableScaleProps } from './shared';

export const TimignConfig = {
	duration: 50,
	easing: Easing.linear,
};

const TouchableScale: React.FC<TouchableScaleProps> = props => {
	const { children, disabled = false, style = {}, scaleTo } = props;

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

		return {
			transform: [{ scale }],
		};
	});

	return (
		<TouchableWithoutFeedback
			onPressIn={() => {
				pressed.value = true;
			}}
			onPressOut={() => {
				pressed.value = false;
			}}
			disabled={disabled}
		>
			<Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
		</TouchableWithoutFeedback>
	);
};

export default TouchableScale;
