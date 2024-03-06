import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "src/user/user.service";
import { Role } from "./role.enum";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private userService: UserService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<Role>('roles', context.getHandler())
        const request = context.switchToHttp().getRequest()
        if (request?.user) {
            const { id } = request.user
            const user = await this.userService.findById(id)
            return roles.includes(user.role)
        }
        return false
    }


}