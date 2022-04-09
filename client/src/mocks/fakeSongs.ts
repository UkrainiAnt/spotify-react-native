import { ISong } from 'models';
import fakeUser from './fakeUser';

const songs: ISong[] = [
	{
		id: 1,
		picture: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
		name: 'High on You',
		albumId: 11,
		audio:
			'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61',
		authorId: 1,
		length: 211,
		views: 211,
		author: fakeUser,
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
		author: fakeUser,
	},
	{
		id: 3,
		picture: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
		name: 'Hello from the other side',
		albumId: 11,
		audio:
			'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61',
		authorId: 1,
		length: 211,
		views: 211,
		author: fakeUser,
	},
	{
		id: 4,
		picture: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
		name: 'When the white is diying',
		albumId: 11,
		audio:
			'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/media%2Fdoom_eternal_09.%20The%20DOOM%20Hunter.mp3?alt=media&token=09a04bd6-fe1b-44c2-b8f0-e9c489e00e61',
		authorId: 1,
		length: 211,
		views: 211,
		author: fakeUser,
	},
];

export default songs;

export const [fakeSong] = songs;
