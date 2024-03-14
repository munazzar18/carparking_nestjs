import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/roles/role.guard';
import { Roles } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { sendJson } from 'src/helper/sendJson';


@Controller('service')
@ApiTags('service')
@ApiBearerAuth()
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) { }

  @Post()
  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.Provider)
  async create(@Body() createServiceDto: CreateServiceDto, @Request() req) {
    const user = req.user
    const service = await this.serviceService.create(createServiceDto, user);
    return sendJson(true, 'Service created successfully', service)
  }

  @Get()
  async findAll() {
    const allServices = await this.serviceService.findAll();
    return sendJson(true, "Services found successfully", allServices)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
