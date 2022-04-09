import { IUser } from './IUser';

export type { IMoreTabItem } from './static/ITab';

export type {
	IUpdateUserPayload,
	IUser,
	LoginPayload,
	RegisterPayload,
} from './IUser';

/**
 * Model Album
 *
 */
export type IAlbum = {
	id: number;
	name: string;
	picture: string;
	genre: string;
	description: string;
	authorId: number;
	createdAt: Date;
	updatedAt: Date;
	author?: IUser;
	_count?: {
		likes: number;
		songs: number;
	};

	songs?: ISong[];
};

/**
 * Model Song
 *
 */
export type ISong = {
	id: number;
	name: string;
	authorId: number;
	albumId: number;
	audio: string;
	views: number;
	picture: string;
	author?: IUser;
	length: number;
	createdAt?: Date;
	updatedAt?: Date;
};

/**
 * Model Comment
 *
 */
export type IComment = {
	id: number;
	authorId: number;
	trackId: number;
	body: string;
	createdAt: Date;
	updatedAt: Date;
};

/**
 * Model Like
 *
 */
export type ILike = {
	id: number;
	authorId: number;
	trackId: number;
	createdAt: Date;
	updatedAt: Date;
};

export interface ICategory {
	id: number;
	title: string;
	albums: IAlbum[];
}
