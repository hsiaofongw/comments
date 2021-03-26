import { IsEmail, IsNotEmpty } from "class-validator";


export class CreateVisitorDto {

    @IsNotEmpty()
    nickName: string;

    @IsEmail()
    email: string;

}
