import { Controller, Get, Post, Body, Param, Delete, Header } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

const cacheAge = process.env?.CACHE_AGE || "0";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.create(createCommentDto);
    }

    @Get()
    @Header('Cache-Control', `public, max-age=${cacheAge}`)
    @Header('x-debug-info-nest-get-comments', 'good')
    findAll() {
        return this.commentsService.findAll();
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.commentsService.remove(uuid);
    }
}
