import { ViewStyle } from 'react-native';

export interface TouchableScaleProps {
	onPress?: () => void;
	scaleTo: number;
	disabled?: boolean;
	style?: ViewStyle;
}
