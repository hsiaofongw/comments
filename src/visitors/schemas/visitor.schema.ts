import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VisitorDocument = Visitor & Document;

@Schema()
export class Visitor {
    @Prop()
    nickName: string;

    @Prop()
    website: number;

    @Prop()
    email: string;

    @Prop()
    avatar: string;
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);
