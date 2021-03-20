import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CronJob, CronJobDocument } from './cronjobs.schema';
import { CreateCronjobDto } from './dto/create-cronjob.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CronjobsService {

    constructor(@InjectModel(CronJob.name) private cronjobModel: Model<CronJobDocument>) {}

    async create(createCronjobDto: CreateCronjobDto): Promise<CronJob> {
        const createdCronJob = new this.cronjobModel(createCronjobDto);
        createdCronJob.uniqueId = uuidv4();
        return createdCronJob.save();
    }

    async findAll(): Promise<CronJob[]> {
        return this.cronjobModel.find().exec();
    }

    async remove(uniqueId: string) {
        return this.cronjobModel.deleteOne({
           uniqueId
        }).exec();
    }
}
