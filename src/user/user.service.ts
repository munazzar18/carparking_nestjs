import { Injectable, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { RegisterUserDto } from './registerUser.dto';
import { userResponse } from 'src/helper/userResponse';
import ParamsWithId from 'src/helper/paramsWithId';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) { }

    async findAllUsers() {
        const allUser = await this.userModel.find()
        return allUser.map((user) => userResponse(user))
    }

    async findById(id: string) {
        const user = await this.userModel.findById(id)
        return userResponse(user)
    }

    async findByEmail(email: string) {
        return await this.userModel.findOne({ email })
    }

    async create(registerDto: RegisterUserDto) {
        const user = new this.userModel(registerDto)
        return await user.save()
    }

}
