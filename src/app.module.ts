import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ServiceModule } from './service/service.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    AuthModule,
    UserModule,
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      global: true
    }),
    ServiceModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
