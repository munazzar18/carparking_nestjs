import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { UnauthorizedException } from "@nestjs/common";
import { SerializedUser } from "src/user/user.schema";


export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
        })
    }

    async validate(email: string, password: string) {
        const user = await this.authService.validateUser(email, passoword)
        if (!user) {
            throw new UnauthorizedException()
        }
        return new SerializedUser(user)
    }
}