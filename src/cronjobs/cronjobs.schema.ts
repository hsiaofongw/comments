import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CronJob {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    cronString: string;

    @Prop()
    uniqueId: string;
}

export type CronJobDocument = CronJob & Document;
export const CronJobSchema = SchemaFactory.createForClass(CronJob);
