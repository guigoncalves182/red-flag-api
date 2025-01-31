import { Types } from 'mongoose';
import { UserEntity } from 'src/domain/entities/user/user.entity';

export const USER_REPOSITORY_TAG = Symbol.for('IUserRepository');

export interface IUserRepository {
  create(params: ICreateUserRepository): Promise<UserEntity>;
  findById(id: Types.ObjectId): Promise<UserEntity>;
}

export interface ICreateUserRepository {
  username: string;
  email: string;
  password: string;
  fullName: string;
  isActive?: boolean;
}
