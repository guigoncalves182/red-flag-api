import { Injectable, NotImplementedException } from '@nestjs/common';
import { ICreateUserService } from 'src/domain/interfaces/create-user.interface';

@Injectable()
export class CreateUserService implements ICreateUserService {
  execute(): string {
    throw new NotImplementedException('Create user not implemented yet');
  }
}
