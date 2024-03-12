import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Type } from "class-transformer";
import mongoose, { Types } from "mongoose";
import { Role } from "src/roles/role.enum";

@Schema()
export class User {

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop({ unique: true })
    email: string

    @Prop()
    phone: string

    @Prop()
    role: Role

    @Prop()
    @Exclude()
    password: string

    // @Prop({ type: { type: Types.ObjectId, ref: Consumer.name } })
    // consumer: Consumer[]

}


export const userSchema = SchemaFactory.createForClass(User)
