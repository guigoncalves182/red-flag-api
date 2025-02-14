import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { MongodbModule } from './mongodb/mongodb.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongodbModule, { module: AuthModule, global: true }, UserModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
