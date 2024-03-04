import * as bcrypt from 'bcrypt'

export function encodedPass(rawPassowrd: string) {
    const SALT = bcrypt.genSaltSync()
    return bcrypt.hashSync(rawPassowrd, SALT)
}

export function comparePass(rawPassowrd: string, hash: string) {
    return bcrypt.compareSync(rawPassowrd, hash)
}