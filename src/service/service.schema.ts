import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import mongoose, { Types } from "mongoose";
import { User } from "src/user/user.schema";

@Schema({
    timestamps: true
})
export class Service {

    @Prop()
    location: string

    @Prop()
    total_space: number

    @Prop()
    cost: number

    @Prop({ type: Types.ObjectId, ref: User.name })
    provider: mongoose.Schema.Types.ObjectId
}

export const serviceSchema = SchemaFactory.createForClass(Service)
