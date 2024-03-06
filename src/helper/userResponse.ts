import { Types } from "mongoose"
import { Role } from "src/roles/role.enum"


interface User {
    _id: Types.ObjectId,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: Role,
}

export const userResponse = (user: User) => {
    return {
        id: user._id.toJSON(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role
    }
}