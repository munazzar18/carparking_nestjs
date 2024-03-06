import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { Types } from "mongoose";
import { User } from "src/user/user.schema";

@Schema()
export class Consumer {

    @Prop()
    customer_name: string

    @Prop()
    address: string

    @Prop()
    dob: Date

    @Prop()
    driver_license: number

    @Prop()
    vehichle_license_plate: string

    @Prop()
    bank_account: string

    @Prop({ type: Types.ObjectId, ref: "User" })
    user: User
}

export const consumerSchema = SchemaFactory.createForClass(Consumer)
