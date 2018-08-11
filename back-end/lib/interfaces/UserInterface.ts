import * as mongoose from 'mongoose';

export interface IUser {
  name: string,
  email: string,
  username: string,
  password: string,
  avatar?: string,
  createdAt?: Date,
  modifiedAt?: Date
}

export interface IUserModel extends IUser, mongoose.Document {}

export interface IUserRepository {
  create(IUser): Promise<IUserModel>;
  find(params?: object): Promise<IUserModel[]>;
  findById(id: string): Promise<IUserModel>;
  update(string, IUser): Promise<IUserModel>;
  delete(id: string): Promise<IUserModel>;
}
