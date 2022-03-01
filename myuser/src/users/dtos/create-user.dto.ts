import { IsEmail,IsString } from "class-validator";

export class CreateUSerDto{

    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    password: string;
}