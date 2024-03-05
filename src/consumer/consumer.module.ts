import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { ConsumerController } from './consumer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Consumer, consumerSchema } from './consumer.schema';



@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Consumer.name,
      schema: consumerSchema
    }])
  ],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule { }
