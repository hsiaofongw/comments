import { Module } from '@nestjs/common';
import { CronjobsService } from './cronjobs.service';
import { CronjobsController } from './cronjobs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CronJob, CronJobSchema } from './cronjobs.schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: CronJob.name, schema: CronJobSchema
    }])],
    controllers: [CronjobsController],
    providers: [CronjobsService],
})
export class CronjobsModule { }
