import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

interface ExtraData {
    country: string;
    name: string;
    guildName: string;
}

export class LeaderboardUserList extends Document {
    @Prop()
    uid: string;

    @Prop()
    score: number;

    @Prop()
    uploadTime: string;

    @Prop({ type: Object })
    extraData: ExtraData;
}

export const LeaderBoardUserListSchema = SchemaFactory.createForClass(LeaderboardUserList);
