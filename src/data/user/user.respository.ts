import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ICreateUserRepository,
  IUserRepository,
} from 'src/domain/interfaces/repositories/user.repository.interface';
import { TUserDocument, User } from 'src/domain/schemas/user.schema';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<TUserDocument>,
  ) {}

  async create(params: ICreateUserRepository): Promise<User> {
    return new this.userModel(params).save();
  }
}
