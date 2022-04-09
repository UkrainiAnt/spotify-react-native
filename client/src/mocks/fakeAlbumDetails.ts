import { IAlbum } from 'models';

import fakeSongs from './fakeSongs';
import fakeUser from './fakeUser';

const album: IAlbum = {
	id: 11,
	authorId: 1,
	createdAt: new Date(),
	genre: 'genre',
	_count: {
		likes: 211,
		songs: 21,
	},
	updatedAt: new Date(),
	name: 'Good vibes',
	author: fakeUser,
	picture: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
	description: 'Taylor Swift, Kygo Objective C, Avicii',
	songs: fakeSongs,
};

export default album;
