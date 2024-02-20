import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber } from "class-validator"

export class CreateConsumerDto {

    @ApiProperty()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    password: string

    @ApiProperty()
    @IsNotEmpty()
    customer_name: string

    @ApiProperty()
    @IsNotEmpty()
    address: string

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    dob: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    driver_license: number

    @ApiProperty()
    @IsNotEmpty()
    vehichle_license_plate: string

    @ApiProperty()
    @IsNotEmpty()
    bank_account: string
}
