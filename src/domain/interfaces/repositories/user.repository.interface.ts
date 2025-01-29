import { User } from 'src/domain/schemas/user.schema';

export const USER_REPOSITORY_TAG = Symbol.for('IUserRepository');

export interface IUserRepository {
  create(params: any): Promise<User>;
}

export interface ICreateUserRepository {
  username: string;
  email: string;
  password: string;
  fullName: string;
  isActive?: boolean;
}
