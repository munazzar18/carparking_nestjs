import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

Schema()
export class Consumer {

    @ApiProperty()
    @Prop({ required: true })
    username: string;

    @ApiProperty()
    @Prop({ required: true, unique: true })
    email: string

    @ApiProperty({ required: true })
    @Prop()
    password: string

    @ApiProperty({ required: true })
    @Prop()
    customer_name: string

    @ApiProperty({ required: true })
    @Prop()
    address: string

    @ApiProperty({ required: true })
    @Prop()
    dob: Date

    @ApiProperty({ required: true })
    @Prop()
    driver_license: number

    @ApiProperty({ required: true })
    @Prop()
    vehichle_license_plate: string

    @ApiProperty({ required: true })
    @Prop()
    bank_account: string
}

export const consumerSchema = SchemaFactory.createForClass(Consumer)
