import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testapi } from './entity/testapi.entity';
import { TestapiController } from './testapi.controller';
import { TestapiService } from './testapi.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nana',
      password: 'root',
      database: 'testapi',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Testapi])
  ],
  controllers: [TestapiController],
  providers: [TestapiService],
})
export class TestapiModule {}
