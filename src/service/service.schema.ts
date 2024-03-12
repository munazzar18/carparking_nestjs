import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import mongoose from "mongoose";
import { User } from "src/user/user.schema";

@Schema()
export class Service {

    @Prop()
    location: string

    @Prop()
    total_space: number

    @Prop()
    cost: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    @Type(() => User)
    provider: User
}

export const serviceSchema = SchemaFactory.createForClass(Service)
