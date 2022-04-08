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
							name='search'
							component={SearchScreen}
						/>

						<Stack.Screen
							options={HomeScreenOptions}
							name='library'
							component={LibraryScreen}
						/>

						<Stack.Screen
							options={HomeScreenOptions}
							name='premium'
							component={PremiumScreen}
						/>

						<Stack.Group
							screenOptions={{
								gestureDirection: 'horizontal',
								presentation: 'modal',
							}}
						>
							<Stack.Screen
								options={HomeScreenOptions}
								name='song_actions'
								component={SongActionScreen}
							/>

							<Stack.Screen
								options={HomeScreenOptions}
								name='album_actions'
								component={AlbumActionScreen}
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
