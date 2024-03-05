import { Controller, Get, Post, Body, Request, Patch, Param, Delete, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/user/registerUser.dto';
import { sendJson } from 'src/helper/sendJson';
import { AuthGuard } from '@nestjs/passport';
import MongooseClassSerializerInterceptor from 'src/user/mongooseClassSerializer.interceptor';
import { User } from 'src/user/user.schema';
import { ApiTags } from '@nestjs/swagger';


@Controller('auth')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    const token = await this.authService.login(req.user)
    return sendJson(true, "User login successfully", {
      access_token: token.access_token,
      user: token.user
    })
  }

  @Post('/register')
  async register(@Body() registerDto: RegisterUserDto) {
    const token = await this.authService.register(registerDto);
    return sendJson(true, "User registered successfully", {
      access_token: token.access_Token,
      user: token.user
    })
  }



}
