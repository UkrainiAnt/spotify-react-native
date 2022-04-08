import { createContext } from 'react';

export interface ScrollContextProps {
	scroll: number;
	setScroll: <EventType extends Record<string, any>>(event: EventType) => void;
}

export const ScrollContext = createContext<ScrollContextProps>({
	scroll: 0,
	setScroll: <EventType extends Record<string, any>>(event: EventType) => {
		console.log('putin hiulo');
	},
});
