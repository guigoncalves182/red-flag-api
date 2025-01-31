import { UserEntity } from 'src/domain/entities/user/user.entity';

export const CREATE_USER_SERVICE_TAG = Symbol('ICreateUserService');

export interface ICreateUserService {
  execute(params: ICreateUserServiceParams): Promise<UserEntity>;
}

export interface ICreateUserServiceParams {
  username: string;
  email: string;
  password: string;
  fullName: string;
  isActive?: boolean;
}
