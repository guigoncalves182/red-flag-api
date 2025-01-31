import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import {
  IUserRepository,
  USER_REPOSITORY_TAG,
} from 'src/domain/interfaces/repositories/user.repository.interface';
import {
  ICreateUserUseCase,
  ICreateUserUseCaseParams,
} from 'src/domain/interfaces/usecases/create-user.interface';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_TAG)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(params: ICreateUserUseCaseParams): Promise<UserEntity> {
    const user = new UserEntity(params);
    user.hashPassword('Haxixe');

    return await this.userRepository.create(user.toObject());
  }
}
