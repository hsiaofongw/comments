import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import sha256 from 'crypto-js/sha256';
import Hex from 'crypto-js/enc-hex';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])
    ],
    controllers: [CommentsController],
    providers: [
        CommentsService, 
        TransformInterceptor
    ]
})
export class CommentsModule { }
