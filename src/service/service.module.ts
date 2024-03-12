import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Service, serviceSchema } from './service.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Service.name,
      schema: serviceSchema
    }]),
    UserModule,
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule { }
