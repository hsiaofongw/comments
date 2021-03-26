import {Injectable} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class CommentsService {

    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        let createdComment = new this.commentModel(createCommentDto);
        createdComment.approved = false;
        createdComment.uuid = uuidv4();

        if (createdComment.replyTo) {
            let recipient = await this.commentModel.findOne({ uuid: createdComment.replyTo }).exec();
            recipient.uuidOfReplies.push(createdComment.uuid);
            await recipient.save();
        }
        return createdComment.save();
    }

    async findAll(): Promise<Comment[]> {
        let data = await this.commentModel.find().select({_id: 0, __v: 0}).exec();
        // let data = await this.commentModel.find().exec();
        return data;
    }

    remove(id: number) {
        return `This action removes a #${id} comment`;
    }
}
