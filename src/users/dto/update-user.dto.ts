
import { IsOptional, IsString, Length, IsEmail } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @Length(6, 100)  
    password?: string;

    @IsOptional()
    @IsString()
    @Length(1, 50)  
    firstName?: string;

    @IsOptional()
    @IsString()
    @Length(1, 50)  
    lastName?: string;
}
