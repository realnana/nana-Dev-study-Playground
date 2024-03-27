import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testapi } from './entity/testapi.entity';
import { TestapiController } from './testapi.controller';
import { TestapiService } from './testapi.service';

@Module({
  imports: [
    
  ],
  controllers: [TestapiController],
  providers: [TestapiService],
})
export class TestapiModule {}
