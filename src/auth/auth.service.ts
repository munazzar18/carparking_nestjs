import { HttpException, HttpStatus, Injectable, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';
import { comparePass, encodedPass } from './bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from 'src/user/registerUser.dto';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string) {
    const userDb = await this.userService.findByEmail(email)
    if (userDb) {
      const matched = comparePass(password, userDb.password)
      if (matched) {
        return userDb
      } else {
        throw new UnauthorizedException('Invalid Credentials')
      }
    } else {
      throw new UnauthorizedException('Invalid Credentials')
    }
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      id: user.id,
      username: user.firstName,
      role: user.role
    }
    console.log(payload)
    const accessToken = this.jwtService.sign(payload)
    console.log(accessToken)
    return {
      access_token: accessToken,
      user: {
        email: payload.email,
        id: payload.id,
        username: payload.username,
        role: payload.role
      }
    }
  }

  async register(registerDto: RegisterUserDto) {
    const userDb = await this.userService.findByEmail(registerDto.email)
    if (userDb) {
      throw new HttpException('email alreay exists', HttpStatus.CONFLICT)
    }
    else {
      const password = encodedPass(registerDto.password)
      const newUser = await this.userService.create({
        ...registerDto,
        password
      })
      const payload = {
        email: newUser.email,
        id: newUser.id,
        username: newUser.firstName,
        role: newUser.role
      }
      const accessToken = this.jwtService.sign(payload)
      return {
        access_Token: accessToken,
        user: {
          email: payload.email,
          id: payload.id,
          username: payload.username,
          role: payload.role
        }
      }
    }
  }

}
