import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export class LeaderboardUserList extends Document {
    @Prop()
    uid: string;

    @Prop()
    score: number;

    @Prop()
    uploadTime: string;

    @Prop()
    country: string;

    @Prop()
    name: string;

    @Prop()
    guildName: string;
}

export const LeaderBoardUserListSchema = SchemaFactory.createForClass(LeaderboardUserList);
