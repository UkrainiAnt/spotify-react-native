import { Layout } from 'components/layout';
import { HomeScreenContent } from 'components/pages/Home';
import React from 'react';
import { View } from 'react-native';

const HomeScreen = () => {
	return (
		<Layout>
			<View style={{ flex: 1 }}>
				<HomeScreenContent />
			</View>
		</Layout>
	);
};

export default HomeScreen;
