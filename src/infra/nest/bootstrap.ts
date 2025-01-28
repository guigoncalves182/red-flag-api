import { NestFactory } from '@nestjs/core';
import { MainModule } from './modules/main.module';

export async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(process.env.PORT);
}
