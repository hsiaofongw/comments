import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

class Visitor {
    nickName: string;
    email?: string;
    website?: string;
}

@Schema()
export class Comment {
    @Prop()
    uuid: string;

    @Prop()
    from: Visitor;

    @Prop()
    to: Visitor;

    @Prop()
    at: number;

    @Prop()
    says: string;

    @Prop()
    uuidOfReplies: string[];
}

export const CommentSchema = SchemaFactory.createForClass(Comment);