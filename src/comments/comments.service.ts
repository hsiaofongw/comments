import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './comments.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        const createdComment = new this.commentModel(createCommentDto);
        createdComment.uuid = uuidv4();
        return createdComment.save();
    }

    async findAll(): Promise<Comment[]> {
        return this.commentModel.find().exec();
    }

    async remove(uuid: string) {
        return this.commentModel.deleteOne({uuid}).exec();
    }
}
