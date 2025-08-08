import { Body, Controller, Get, Post } from '@nestjs/common';
import config from 'src/config';
import * as _ from 'lodash';
import { EmployeeService } from './employee.service';
import type { CreateEmployeeData } from './models/employeeModels';

@Controller(`${config.api.root}/employee`)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  async findAll() {
    return this.employeeService.findAll();
  }

  @Post()
  create(@Body() employee: CreateEmployeeData) {
    // Intentional vulnerability
    _.merge(this.employeeService, employee);
    return this.employeeService.create(employee);
  }
}
