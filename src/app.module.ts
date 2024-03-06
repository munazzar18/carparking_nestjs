import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProviderModule } from './provider/provider.module';
import { ConsumerModule } from './consumer/consumer.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    AuthModule,
    ProviderModule,
    ConsumerModule,
    UserModule,
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      global: true
    })
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
