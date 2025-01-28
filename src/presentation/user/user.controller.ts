import { Controller, Get, Inject } from '@nestjs/common';
import {
  CREATE_USER_TAG,
  ICreateUserService,
} from 'src/domain/interfaces/create-user.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject(CREATE_USER_TAG)
    private readonly userService: ICreateUserService,
  ) {}

  @Get()
  createUser(): string {
    return this.userService.execute();
  }
}
