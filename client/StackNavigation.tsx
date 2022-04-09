import {
	CardStyleInterpolators,
	StackNavigationOptions,
	createStackNavigator,
} from '@react-navigation/stack';
import { useAuthState } from 'hooks';
import React from 'react';

import {
	AlbumActionScreen,
	AlbumScreen,
	HomeScreen,
	LibraryScreen,
	LoginScreen,
	PlayerScreen,
	PremiumScreen,
	RegisterScreen,
	SearchScreen,
	SongActionScreen,
	SongScreen,
} from './src/screens';

const Stack = createStackNavigator();

const HomeScreenOptions: StackNavigationOptions = {
	header: () => <></>,
};

const StackNavigation = () => {
	const { user } = useAuthState();

	return (
		<Stack.Navigator
			screenOptions={{
				gestureDirection: 'horizontal',
				gestureEnabled: true,
			}}
			initialRouteName={user ? 'home' : 'login'}
		>
			{user ? (
				<>
					<Stack.Group
						screenOptions={{
							cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
						}}
					>
						<Stack.Screen
							options={HomeScreenOptions}
							name='home'
							component={HomeScreen}
						/>
						<Stack.Screen
							options={HomeScreenOptions}
							name='album'
							component={AlbumScreen}
						/>
						<Stack.Screen
							options={HomeScreenOptions}
							name='library'
							component={LibraryScreen}
						/>
						<Stack.Screen
							options={HomeScreenOptions}
							name='search'
							component={SearchScreen}
						/>

						<Stack.Screen
							options={HomeScreenOptions}
							name='premium'
							component={PremiumScreen}
						/>

						<Stack.Group
							screenOptions={{
								gestureDirection: 'vertical',
								presentation: 'modal',
								cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
							}}
						>
							<Stack.Screen
								options={HomeScreenOptions}
								name='album_more'
								component={AlbumActionScreen}
							/>
							<Stack.Screen
								options={HomeScreenOptions}
								name='song_more'
								component={SongActionScreen}
							/>

							<Stack.Screen
								options={HomeScreenOptions}
								name='player'
								component={PlayerScreen}
							/>
						</Stack.Group>

						<Stack.Screen
							options={HomeScreenOptions}
							name='song'
							component={SongScreen}
						/>
					</Stack.Group>
				</>
			) : (
				<Stack.Group
					screenOptions={{
						cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
					}}
				>
					<Stack.Screen
						options={HomeScreenOptions}
						name='login'
						component={LoginScreen}
					/>
					<Stack.Screen
						options={HomeScreenOptions}
						name='register'
						component={RegisterScreen}
					/>
				</Stack.Group>
			)}
		</Stack.Navigator>
	);
};

export default StackNavigation;
