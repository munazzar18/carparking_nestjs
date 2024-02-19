import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

export type ConsomerDocument = HydratedDocument<Consumer>

Schema()
export class Consumer {

    @ApiProperty()
    @Prop()
    username: string;

    @ApiProperty()
    @Prop()
    email: string

    @ApiProperty()
    @Prop()
    password: string

    @ApiProperty()
    @Prop()
    customer_name: string

    @ApiProperty()
    @Prop()
    address: string

    @ApiProperty()
    @Prop()
    dob: Date

    @ApiProperty()
    @Prop()
    driver_license: number

    @ApiProperty()
    @Prop()
    vehichle_license_plate: string

    @ApiProperty()
    @Prop()
    bank_account: string
}

export const consumerSchema = SchemaFactory.createForClass(Consumer)
