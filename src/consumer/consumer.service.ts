import { Injectable } from '@nestjs/common';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Consumer } from './consumer.schema';
import { Model } from 'mongoose';

@Injectable()
export class ConsumerService {
  constructor(
    @InjectModel(Consumer.name) private consumerModel: Model<Consumer>
  ) { }

  async findAll() {
    return await this.consumerModel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} consumer`;
  }

  async create(createConsumerDto: CreateConsumerDto) {
    const data = new this.consumerModel(createConsumerDto)
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
