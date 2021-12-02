import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsUUID, MaxLength } from "class-validator";
import { range } from "rxjs";

@InputType()
export class CreateAddresImput{
    @IsUUID()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, userId'})
    userId: string;
    
    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, street'})
    street: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, number'})
    @MaxLength(11)
    number: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, neightborhood'})
    neightborhood: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, zip_code'})
    zip_code: string;

    
    complement?: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, city'})
    city: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio, uf'})
    @MaxLength(2)
    uf: string;

}