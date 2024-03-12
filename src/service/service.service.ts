import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './service.schema';
import { Model } from 'mongoose';
import { User } from 'src/user/user.schema';

@Injectable()
export class ServiceService {

  constructor(
    @InjectModel(Service.name) private serviceModel: Model<Service>
  ) { }

  async create(createServiceDto: CreateServiceDto, authUser: User) {
    const service = new this.serviceModel({ ...createServiceDto, user: authUser })
    const data = await service.save()
    return data
  }

  findAll() {
    return `This action returns all service`;
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
