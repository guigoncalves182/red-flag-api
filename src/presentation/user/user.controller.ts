import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  CREATE_USER_SERVICE_TAG,
  ICreateUserService,
} from 'src/domain/interfaces/services/create-user.interface';
import { CreateUserDto } from '../dtos/user/create.dto';
import { plainToInstance } from 'class-transformer';
import { UserDto } from '../dtos/user/user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(CREATE_USER_SERVICE_TAG)
    private readonly createUserService: ICreateUserService,
  ) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.createUserService.execute(createUserDto);

    return plainToInstance(UserDto, user, {
      excludeExtraneousValues: true,
    });
  }
}
