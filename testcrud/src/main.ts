import { NestFactory } from '@nestjs/core';
import { CrudModule } from './crud/crud.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CrudModule);

  const config = new DocumentBuilder()
    .setTitle('API 문서')
    .setDescription('CRUD 테스트를 위한 API 문서 입니다.')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
