import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as mongoose from 'mongoose';
import { LeaderboardModule } from './leaderboard/leaderboard.module';



@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}), MongooseModule.forRoot(process.env.MONGODB_URI),
    LeaderboardModule,
  ],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.NODE_ENV == 'dev' ? true : false;
  configure() {
    mongoose.set('debug', this.isDev);
  }
}
