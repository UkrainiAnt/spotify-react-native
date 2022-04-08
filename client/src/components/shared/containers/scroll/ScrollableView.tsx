import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';
import {
	ScrollContext,
	ScrollContextProps,
} from 'providers/scroll/scroll.context';
import { useContext } from 'react';

const ScrollableView: React.FC<ScrollViewProps> = props => {
	const { setScroll } = useContext<ScrollContextProps>(ScrollContext);

	return <ScrollView {...props} onScroll={setScroll} style={styles.wrapper} />;
};

export default React.memo(ScrollableView);

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});
