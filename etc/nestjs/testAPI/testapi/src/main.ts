import { NestFactory } from '@nestjs/core';
import { TestapiModule } from './testapi.module';

async function bootstrap() {
  const app = await NestFactory.create(TestapiModule);
  await app.listen(4000);
}
bootstrap();
