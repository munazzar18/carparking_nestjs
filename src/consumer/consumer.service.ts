import { Injectable } from '@nestjs/common';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Consumer } from './consumer.schema';
import { Model } from 'mongoose';
import { User } from 'src/user/user.schema';

@Injectable()
export class ConsumerService {
  constructor(
    @InjectModel(Consumer.name) private consumerModel: Model<Consumer>
  ) { }

  async findAll() {
    return await this.consumerModel.find()
  }

  async findOne(id: string) {
    const consumer = await this.consumerModel.findById(id)
    return consumer
  }

  async create(createConsumerDto: CreateConsumerDto, authUser: User) {
    const data = new this.consumerModel({ ...createConsumerDto, user: authUser })
    const consumer = await data.save()
    return consumer
  }

  update(id: number, updateConsumerDto: UpdateConsumerDto) {
    return `This action updates a #${id} consumer`;
  }

  remove(id: number) {
    return `This action removes a #${id} consumer`;
  }
}
