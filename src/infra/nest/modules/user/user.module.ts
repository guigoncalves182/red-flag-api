import { Module } from '@nestjs/common';
import { CREATE_USER_TAG } from 'src/domain/interfaces/create-user.interface';
import { UserController } from 'src/presentation/user/user.controller';
import { CreateUserService } from 'src/services/user/create-user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: CREATE_USER_TAG,
      useClass: CreateUserService,
    },
  ],
})
export class UserModule {}
