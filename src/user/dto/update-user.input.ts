import { InputType } from "@nestjs/graphql";
import { IsEmail, isEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserImput{
    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    @IsOptional()
    name?: string;
    
    @IsEmail()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    @IsOptional()
    email?: string;
}