import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeaderboardUserList } from 'src/leaderboard-user-list/leaderboard-user-list';

@Injectable()
export class LeaderboardService {
    constructor(
        @InjectModel(LeaderboardUserList.name) private leaderboardUserListModel: Model<LeaderboardUserList>,
    ) {}

    async uploadScore(uid: string, score: number, uploadTime: string, extraData: { country: string, name: string, guildName: string }): Promise<LeaderboardUserList> {
        const userList = new this.leaderboardUserListModel({
            uid,
            score,
            uploadTime,
            extraData,
        });
        return await userList.save();
    }

    async getLeaderboard(id: number): Promise<LeaderboardUserList[]> {
        return await this.leaderboardUserListModel.find({ id }).sort({ score: -1}).exec();
    }
}
