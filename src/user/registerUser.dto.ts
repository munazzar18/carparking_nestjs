import { IsEmail, IsNotEmpty, Min } from "class-validator"
import { Role } from "src/roles/role.enum"


export class RegisterUserDto {

    @IsNotEmpty()
    @Min(3)
    firstName: string

    @IsNotEmpty()
    @Min(3)
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    phone: string

    role: Role

    @IsNotEmpty()
    password: string

}