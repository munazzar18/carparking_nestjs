import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Role } from "src/roles/role.enum";

@Schema()
export class User {

    @ApiProperty()
    @Prop()
    firstName: string

    @ApiProperty()
    @Prop()
    lastName: string

    @ApiProperty()
    @Prop()
    email: string

    @ApiProperty()
    @Prop()
    phone: string

    @ApiProperty()
    @Prop({ type: 'enum', enum: Role, default: Role.Consumer })
    role: Role

    @ApiProperty()
    @Prop()
    password: string

}


export class SerializedUser {
    firstName: string
    lastName: string
    email: string
    phone: string
    role: Role

    @Exclude()
    password: string

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial)
    }
}

export const userSchema = SchemaFactory.createForClass(User)