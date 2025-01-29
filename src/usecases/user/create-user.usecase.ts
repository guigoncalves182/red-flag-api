import { Inject, Injectable } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY_TAG,
} from 'src/domain/interfaces/repositories/user.repository.interface';
import {
  ICreateUserUseCase,
  ICreateUserUseCaseParams,
} from 'src/domain/interfaces/usecases/create-user.interface';
import { User } from 'src/domain/schemas/user.schema';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_TAG)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(params: ICreateUserUseCaseParams): Promise<User> {
    return await this.userRepository.create(params);
  }
}
