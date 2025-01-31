import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import {
  ICreateUserService,
  ICreateUserServiceParams,
} from 'src/domain/interfaces/services/create-user.interface';
import {
  CREATE_USER_USE_CASE_TAG,
  ICreateUserUseCase,
} from 'src/domain/interfaces/usecases/create-user.interface';
@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @Inject(CREATE_USER_USE_CASE_TAG)
    private readonly createUserUseCase: ICreateUserUseCase,
  ) {}

  async execute(params: ICreateUserServiceParams): Promise<UserEntity> {
    return await this.createUserUseCase.execute(params);
  }
}
