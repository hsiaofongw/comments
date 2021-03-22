import { Controller, Get, Post, Body, Param, Delete, Header, Res } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('comments')
export class CommentsController {

    constructor(
        private readonly commentsService: CommentsService,
        private configService: ConfigService
    ) { }

    @Post()
    create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.create(createCommentDto);
    }

    @Get()
    findAll(@Res({ passthrough: true }) res: Response) {
        const cacheAge = this.configService.get('CACHE_AGE', 0);
        // res.setHeader('Cache-Control', `public, max-age=${cacheAge}, stale-while-revalidate=30, stale-if-error=30`);
        // res.setHeader('x-debug-info-nest-get-comments', 'good');
        return this.commentsService.findAll();
    }

    // @Delete(':uuid')
    // remove(@Param('uuid') uuid: string) {
    //     return this.commentsService.remove(uuid);
    // }
}
