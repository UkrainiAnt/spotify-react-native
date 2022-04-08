import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export const gradiesntColors: string[] = [
	'#00000060',
	'#00000060',
	'#00000070',
	'#00000070',
	'#00000080',
	'#00000080',
	'#00000080',
	'#00000080',
	'#00000090',
	'#00000090',
	'#00000090',
	'#00000090',
	'#00000090',
	'#00000090',
	'#000',
	'#000',
	'#000',
	'#000',
	'#000',
	'#000',
	'#000',
	'#000',
	'#000',
	'#000',
];

const fakeTabs: any[] = [
	{
		Icon: 'home-filled',
		to: 'home',
		iconSet: MaterialIcons,
		label: 'Home',
	},

	{
		Icon: 'search',
		to: 'search',
		iconSet: MaterialIcons,
		label: 'Search',
	},

	{
		Icon: 'my-library-music',
		to: 'library',
		iconSet: MaterialIcons,
		label: 'Library',
	},

	{
		Icon: 'my-library-music',
		to: 'library',
		iconSet: MaterialIcons,
		label: 'Library',
	},

	{
		Icon: 'spotify',
		to: 'profile',
		iconSet: FontAwesome5,
		label: 'Premium',
	},
];

export const [fakeTab] = fakeTabs;

export default fakeTabs;
