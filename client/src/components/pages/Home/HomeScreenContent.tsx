import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import { HomeScreenRecents, Lente } from './';

const HomeScreenContent = () => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				flex: 1,
				paddingBottom: 140,
				height: Dimensions.get('screen').height,
			}}
		>
			<HomeScreenRecents />
			<Lente />

			<View style={{ height: 130 }}></View>
		</ScrollView>
	);
};

export default HomeScreenContent;
