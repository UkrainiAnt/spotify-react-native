export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string | null;
  picture?: string;
}

export type IUser = {
  id: number;
  email: string;
  name: string | null;
  picture: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IUpdateUserPayload {
  picture: string;
  name: string;
  bio: string;
}
