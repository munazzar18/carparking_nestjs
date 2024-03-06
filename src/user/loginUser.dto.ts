import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"
import { Types } from "mongoose"


export class LoginUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    password: string

    firstName: string

    role: string

    id: Types.ObjectId
}