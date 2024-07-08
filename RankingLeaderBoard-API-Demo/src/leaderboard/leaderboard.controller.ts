
import { Controller, Post, Get, Param } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardUserList } from 'src/leaderboard-user-list/leaderboard-user-list';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Post(':uid/:score/:uploadTime/:country/:name/:guildName')
  async uploadScore(
    @Param('uid') uid: string,
    @Param('score') score: number,
    @Param('uploadTime') uploadTime: string,
    @Param('country') country: string,
    @Param('name') name: string,
    @Param('guildName') guildName: string,
  ): Promise<LeaderboardUserList> {
    // object -> string으로 바꾸기
    const extraData = { country, name, guildName };
    return await this.leaderboardService.uploadScore(uid, score, uploadTime, extraData);
  }

  @Get(':id')
  async getLeaderboard(@Param('id') id: number): Promise<LeaderboardUserList[]> {
    return await this.leaderboardService.getLeaderboard(id);
  }
}
