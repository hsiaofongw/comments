import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
} from '@nestjs/common';
import { CronjobsService } from './cronjobs.service';
import { CreateCronjobDto } from './dto/create-cronjob.dto';

@Controller('cronjobs')
export class CronjobsController {
    constructor(private readonly cronjobsService: CronjobsService) { }

    @Post()
    create(@Body() createCronjobDto: CreateCronjobDto) {
        return this.cronjobsService.create(createCronjobDto);
    }

    @Get()
    findAll() {
        return this.cronjobsService.findAll();
    }

    @Delete(':uniqueId')
    remove(@Param('uniqueId') uniqueId: string) {
        return this.cronjobsService.remove(uniqueId);
    }
}
