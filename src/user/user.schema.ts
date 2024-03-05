import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import mongoose from "mongoose";
import { Consumer } from "src/consumer/consumer.schema";
import { Role } from "src/roles/role.enum";

@Schema()
export class User {

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    email: string

    @Prop()
    phone: string

    @Prop()
    role: Role

    @Prop()
    password: string

    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'consumer' } })
    consumer: Consumer

}


export class SerializedUser {
    firstName: string
    lastName: string
    email: string
    phone: string
    role: Role

    @ApiProperty()
    @Exclude()
    password: string

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial)
    }
}

export const userSchema = SchemaFactory.createForClass(User)