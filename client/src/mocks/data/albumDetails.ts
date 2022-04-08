import { IAlbum } from 'models';

const album: IAlbum = {
	id: 11,
	authorId: 1,
	createdAt: new Date(),
	genre: 'genre',
	_count: {
		likes: 211,
		tracks: 21,
	},
	updatedAt: new Date(),
	name: 'Good vibes',
	author: {
		name: 'Spotify',
	},
	picture: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
	description: 'Taylor Swift, Kygo Objective C, Avicii',
	tracks: [
		{
			id: 1,
			picture:
				'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
			name: 'High on You',
			albumId: 11,
			audio:
				'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61',
			authorId: 1,
			length: 211,
			views: 211,
		},
		{
			id: 2,
			picture:
				'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
			name: 'Lorem Ipsum',
			albumId: 11,
			audio:
				'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61',
			authorId: 1,
			length: 211,
			views: 211,
		},
		{
			id: 3,
			picture:
				'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
			name: 'Hello from the other side',
			albumId: 11,
			audio:
				'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61',
			authorId: 1,
			length: 211,
			views: 211,
		},
		{
			id: 4,
			picture:
				'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
			name: 'High on You',
			albumId: 11,
			audio:
				'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61',
			authorId: 1,
			length: 211,
			views: 211,
		},
	],
};

export default album;
