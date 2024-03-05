import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { SerializedUser } from './user.schema';
import { sendJson } from 'src/helper/sendJson';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('users')
export class UserController {
    constructor(
        private userService: UserService
    ) { }


    @UseInterceptors(ClassSerializerInterceptor)
    @Get('all')
    async getAllUsers() {
        const users = await this.userService.findAllUsers()
        if (users.length > 0) {
            const allUsers = users.map((user => new SerializedUser(user)))
            return sendJson(true, 'fetched all users successfully', allUsers)
        }
        else {
            throw new HttpException('No users found', HttpStatus.NOT_FOUND)
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('userId/:id')
    async getById(@Param('id') id: string) {
        const user = await this.userService.findById(id)
        if (user) {
            const foundUser = new SerializedUser(user)
            return sendJson(true, 'User found by id', foundUser)
        } else {
            throw new NotFoundException('No user found for this id')
        }
    }


}
