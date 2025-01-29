import { User } from 'src/domain/schemas/user.schema';

export const CREATE_USER_USE_CASE_TAG = Symbol('ICreateUserUseCase');

export interface ICreateUserUseCase {
  execute(params: ICreateUserUseCaseParams): Promise<User>;
}

export interface ICreateUserUseCaseParams {
  username: string;
  email: string;
  password: string;
  fullName: string;
  isActive?: boolean;
}
