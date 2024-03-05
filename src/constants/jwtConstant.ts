export const JwtConstant = {
    secret: process.env.AUTH_SECRET
}

console.log("JWT", JwtConstant.secret)
console.log('AUTH_SECRET:', process.env.AUTH_SECRET);