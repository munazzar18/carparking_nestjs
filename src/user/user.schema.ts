import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Type } from "class-transformer";
import mongoose, { Types } from "mongoose";
import { Role } from "src/roles/role.enum";
import { Service } from "src/service/service.schema";

@Schema({
    timestamps: true
})
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

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }] })
    services: mongoose.Schema.Types.ObjectId[]

}


export const userSchema = SchemaFactory.createForClass(User)
