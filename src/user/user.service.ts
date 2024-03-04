import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { RegisterUserDto } from './registerUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) { }

    async findAllUsers() {
        return await this.userModel.find()
    }

    async findById(id: string) {
        return await this.userModel.findById({ id })
    }

    async findByEmail(email: string) {
        return await this.userModel.findOne({ email })
    }

    async create(registerDto: RegisterUserDto) {
        const user = new this.userModel(registerDto)
        return await user.save()
    }

}
