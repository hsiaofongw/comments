import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsUrl } from "class-validator";

class Visitor {

    @IsNotEmpty()
    readonly nickName: string;

    @IsEmail()
    email?: string;

    website?: string;
}

export class CreateCommentDto {
    readonly uuid: string;

    readonly from: Visitor;

    readonly to: Visitor;

    @IsNumber()
    readonly at: number;

    @IsNotEmpty()
    readonly says: string;

    @IsArray()
    uuidOfReplies: string[];

}


