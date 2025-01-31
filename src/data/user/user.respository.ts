import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import {
  ICreateUserRepository,
  IUserRepository,
} from 'src/domain/interfaces/repositories/user.repository.interface';
import { TUserDocument } from 'src/infra/schemas/user.schema';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserEntity.name)
    private readonly userModel: Model<TUserDocument>,
  ) {}

  async create(params: ICreateUserRepository): Promise<UserEntity> {
    return await this.userModel.create(params);
  }

  async findById(id: Types.ObjectId): Promise<UserEntity> {
    return await this.userModel.findById(id);
  }
}
