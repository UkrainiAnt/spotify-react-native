import { ScrollProvider } from 'providers';
import React from 'react';
import { ScrollViewProps } from 'react-native';
import { ScrollableView } from './';

const ScrollContainer: React.FC<ScrollViewProps> = props => {
	const Component = <ScrollableView {...props} />;

	return <ScrollProvider>{Component}</ScrollProvider>;
};

export default ScrollContainer;
