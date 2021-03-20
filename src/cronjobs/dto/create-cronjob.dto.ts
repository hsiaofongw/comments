import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateCronjobDto {
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly cronString: string;
}
