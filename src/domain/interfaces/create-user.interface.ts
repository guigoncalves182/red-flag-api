export const CREATE_USER_TAG = Symbol('ICreateUserService');

export interface ICreateUserService {
  execute(): string;
}
