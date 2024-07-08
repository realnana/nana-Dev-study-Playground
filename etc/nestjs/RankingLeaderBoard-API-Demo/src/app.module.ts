import { Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nyu0kim:nana00@cluster0.uycb0xp.mongodb.net/'),
  ],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.NODE_ENV === 'dev';

  configure() {
    mongoose.set('debug', this.isDev);
  }
}

