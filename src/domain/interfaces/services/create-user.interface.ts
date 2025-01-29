import { User } from 'src/domain/schemas/user.schema';

export const CREATE_USER_SERVICE_TAG = Symbol('ICreateUserService');

export interface ICreateUserService {
  execute(params: ICreateUserServiceParams): Promise<User>;
}

export interface ICreateUserServiceParams {
  username: string;
  email: string;
  password: string;
  fullName: string;
  isActive?: boolean;
}
