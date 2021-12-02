import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

@InputType()
export class UpdateAddresImput{ 
    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, street'})
    @IsOptional()
    street?: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, number'})
    @MaxLength(11)
    @IsOptional()
    number?: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, neightborhood'})
    @IsOptional()
    neightborhood?: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, zip_code'})
    @IsOptional()
    zip_code?: string;

    @IsOptional()
    complement?: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, city'})
    @IsOptional()
    city?: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, uf'})
    @MaxLength(2)
    @IsOptional()
    uf?: string;

}