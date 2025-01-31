import { UserEntity } from 'src/domain/entities/user/user.entity';

export const CREATE_USER_USE_CASE_TAG = Symbol('ICreateUserUseCase');

export interface ICreateUserUseCase {
  execute(params: ICreateUserUseCaseParams): Promise<UserEntity>;
}

export interface ICreateUserUseCaseParams {
  username: string;
  email: string;
  password: string;
  fullName: string;
  isActive?: boolean;
}
