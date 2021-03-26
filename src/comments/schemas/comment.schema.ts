import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude, Expose } from 'class-transformer';

export type CommentDocument = Comment & Document;

class Visitor {
    nickName: string;   
    email: string;      
    website: string;    
    avatar: string;
}

@Schema()
export class Comment {

    @Prop()
    uuid: string;              

    @Prop()
    replyTo: string;           

    // @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Visitor' } })
    @Prop()
    from: Visitor;             

    @Prop()
    at: number;                 

    @Prop()
    says: string;               

    @Prop()
    uuidOfReplies: string[];    

    @Prop()
    approved: boolean;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);
