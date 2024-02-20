import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { sendJson } from 'src/helper/sendJson';
import { ApiTags } from '@nestjs/swagger';

@Controller('consumer')
@ApiTags('consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) { }


  @Post()
  async create(@Body() createConsumerDto: CreateConsumerDto) {
    const res = await this.consumerService.create(createConsumerDto);
    console.log(res)
    return sendJson(true, "consumer registered successfully", res)
  }

  @Get()
  async findAll() {
    const findAll = await this.consumerService.findAll();
    return sendJson(true, "Consumers found successfully", findAll)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumerDto: UpdateConsumerDto) {
    return this.consumerService.update(+id, updateConsumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumerService.remove(+id);
  }
}
