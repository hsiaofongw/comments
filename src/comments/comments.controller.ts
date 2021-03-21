import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.create(createCommentDto);
    }

    @Get()
    findAll() {
        return this.commentsService.findAll();
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.commentsService.remove(uuid);
    }
}
