import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, Min, MinLength } from "class-validator"
import { Role } from "src/roles/role.enum"


export class RegisterUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3)
    firstName: string

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3)
    lastName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    phone: string

    @ApiProperty()
    role: Role

    @ApiProperty()
    @IsNotEmpty()
    password: string

}