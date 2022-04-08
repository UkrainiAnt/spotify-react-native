import React, { useCallback, useState } from 'react';

import { ScrollContext, ScrollContextProps } from './scroll.context';

const ScrollProvider: React.FC = ({ children }) => {
	const [scroll, setScroll] = useState<number>(0);

	const changeScroll = <EventType extends Record<string, any>>(
		event: EventType,
	) => {
		console.log('scrolled');
		setScroll(event.nativeEvent.contentOffset.y);
	};

	const scrollValues: ScrollContextProps = { scroll, setScroll: changeScroll };

	return (
		<ScrollContext.Provider value={scrollValues}>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollProvider;
