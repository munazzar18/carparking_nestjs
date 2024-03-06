import { Controller, Get, Post, Body, Patch, Param, Request, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { sendJson } from 'src/helper/sendJson';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/roles/role.guard';
import { Roles } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';

@Controller('consumer')
@ApiTags('consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) { }


  @Get()
  async findAll() {
    const findAll = await this.consumerService.findAll();
    return sendJson(true, "Consumers found successfully", findAll)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const consumer = await this.consumerService.findOne(id);
    if (!consumer) {
      throw new NotFoundException('Consumer not found for this id')
    } else {
      return sendJson(true, "Consumer found successfully", consumer)
    }
  }


  @Post()
  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.Consumer)
  async create(@Body() createConsumerDto: CreateConsumerDto, @Request() req) {
    const user = req.user
    const res = await this.consumerService.create(createConsumerDto, user);
    console.log(res)
    return sendJson(true, "consumer registered successfully", res)
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
