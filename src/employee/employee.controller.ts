import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import config from 'src/config';
import * as _ from 'lodash';
import { EmployeeService } from './employee.service';
import { UtilService } from 'src/util/util.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { UpdateEmployeeDTO } from './dto/update-employee.dto';

@Controller(`${config.api.root}/employee`)
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly utilService: UtilService,
  ) {}
  @Get()
  @HttpCode(200)
  async findAll() {
    return this.employeeService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body(ValidationPipe) employee: CreateEmployeeDTO) {
    // Intentional vulnerability
    _.merge(this.employeeService, employee);
    return this.employeeService.create(employee);
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    const _id = this.utilService.parseId(id);
    return this.employeeService.findOne(_id);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) employeeUpdate: UpdateEmployeeDTO,
  ) {
    const _id = this.utilService.parseId(id);
    return this.employeeService.update(_id, employeeUpdate);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const _id = this.utilService.parseId(id);
    return this.employeeService.delete(_id);
  }
}
