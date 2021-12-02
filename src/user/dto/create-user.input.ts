import { InputType } from "@nestjs/graphql";
import { IsEmail, isEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserImput{
    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    name: string;
    
    @IsEmail()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    email: string;
}