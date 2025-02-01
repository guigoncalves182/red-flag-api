import * as bcrypt from 'bcrypt';

import { IToObject } from '../@shared/toObject.interface';

class IUserEntity {
  username: string;
  email: string;
  password: string;
  fullName: string;
  isActive?: boolean;
}

export class UserEntity implements IUserEntity, IToObject<IUserEntity> {
  private _username: string;
  private _email: string;
  private _password: string;
  private _fullName: string;
  private _isActive: boolean = true;

  constructor(props: IUserEntity) {
    Object.assign(this, props);
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get fullName(): string {
    return this._fullName;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set username(value: string) {
    this._username = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set password(value: string) {
    this._password = value;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  toObject(): IUserEntity {
    return {
      username: this._username,
      email: this._email,
      password: this._password,
      fullName: this._fullName,
      isActive: this._isActive,
    };
  }

  validatePassword(
    plainTextPassword: string,
    hashedTextPassword: string,
  ): boolean {
    return bcrypt.compareSync(plainTextPassword, hashedTextPassword);
  }

  hashPassword(plainTextPassword: string): void {
    const salt_value = Number(process.env.BCRYPT_SALT_VALUE);

    const salt = bcrypt.genSaltSync(salt_value);
    const hashedTextPassword = bcrypt.hashSync(plainTextPassword, salt);

    this._password = hashedTextPassword;
  }

  deactivate(): void {
    this._isActive = false;
  }
}
