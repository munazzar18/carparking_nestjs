import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { sendJson } from 'src/helper/sendJson';
import { ApiTags } from '@nestjs/swagger';
import MongooseClassSerializerInterceptor from './mongooseClassSerializer.interceptor';
import { User } from './user.schema';
import ParamsWithId from 'src/helper/paramsWithId';

@Controller('user')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
@ApiTags('users')
export class UserController {
    constructor(
        private userService: UserService
    ) { }


    @Get('all')
    async getAllUsers() {
        const users = await this.userService.findAllUsers()
        if (users.length > 0) {
            return sendJson(true, 'fetched all users successfully', users)
        }
        else {
            throw new HttpException('No users found', HttpStatus.NOT_FOUND)
        }
    }

    @Get('userId/:id')
    async getById(@Param('id') id: string) {
        const user = await this.userService.findById(id)
        if (user) {
            return sendJson(true, 'User found by id', user)
        } else {
            throw new NotFoundException('No user found for this id')
        }
    }


}
