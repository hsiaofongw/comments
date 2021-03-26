import { Type } from 'class-transformer';
import { MinLength, MaxLength, ValidateNested } from 'class-validator';
import { CreateVisitorDto } from 'src/visitors/dto/create-visitor.dto';

export class CreateCommentDto {

    @ValidateNested()
    @Type(() => CreateVisitorDto)
    from: CreateVisitorDto;

    @MaxLength(1024, {
        message: 'message is too long',
    })
    says: string;

}
