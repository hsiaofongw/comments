import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, SerializeOptions } from '@nestjs/common';
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
    async findAll() {
        const data = await this.commentsService.findAll();
        return data;
    }

}
