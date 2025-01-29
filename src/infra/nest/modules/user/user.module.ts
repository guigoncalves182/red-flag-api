import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from 'src/data/user/user.respository';
import { USER_REPOSITORY_TAG } from 'src/domain/interfaces/repositories/user.repository.interface';
import { CREATE_USER_SERVICE_TAG } from 'src/domain/interfaces/services/create-user.interface';
import { CREATE_USER_USE_CASE_TAG } from 'src/domain/interfaces/usecases/create-user.interface';
import {
  User,
  USER_COLLECTION,
  UserSchema,
} from 'src/domain/schemas/user.schema';
import { UserController } from 'src/presentation/user/user.controller';
import { CreateUserService } from 'src/services/user/create-user.service';
import { CreateUserUseCase } from 'src/usecases/user/create-user.useCase';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: USER_COLLECTION },
    ]),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: CREATE_USER_SERVICE_TAG,
      useClass: CreateUserService,
    },
    {
      provide: CREATE_USER_USE_CASE_TAG,
      useClass: CreateUserUseCase,
    },
    {
      provide: USER_REPOSITORY_TAG,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
