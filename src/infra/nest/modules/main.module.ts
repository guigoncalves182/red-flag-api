import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [MongodbModule, UserModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
