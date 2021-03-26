import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Visitor, VisitorSchema } from './schemas/visitor.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Visitor.name, schema: VisitorSchema }])],
    controllers: [],
    providers: []
})
export class VisitorsModule { }
