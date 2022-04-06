export type {
  IUser,
  LoginPayload,
  RegisterPayload,
  IUpdateUserPayload,
} from "./IUser";

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
  author?: {
    name: string;
  };
  _count?: {
    likes: number;
    tracks: number;
  };

  tracks?: ITrack[];
};

/**
 * Model Track
 *
 */
export type ITrack = {
  id: number;
  name: string;
  authorId: number;
  albumId: number;
  audio: string;
  views: number;
  picture: string;
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
