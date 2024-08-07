import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 100)  
    password: string;

    @IsOptional()
    @IsString()
    @Length(1, 50)  
    firstName?: string;

    @IsOptional()
    @IsString()
    @Length(1, 50)  
    lastName?: string;
}
