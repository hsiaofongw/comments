import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, SerializeOptions, Query } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { TransformInterceptor } from './interceptors/transform.interceptor';


@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.create(createCommentDto);
    }

    @UseInterceptors(TransformInterceptor)
    @Get()
    async findCommentsByLocation(@Query('location') location: string) {
        const data = await this.commentsService.findByLocation(location);
        return data;
    }    

}
