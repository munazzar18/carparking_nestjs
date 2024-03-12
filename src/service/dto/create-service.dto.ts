import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateServiceDto {

    @ApiProperty()
    @IsNotEmpty()
    location: string

    @ApiProperty()
    @IsNotEmpty()
    total_space: number

    @ApiProperty()
    @IsNotEmpty()
    cost: number

}
