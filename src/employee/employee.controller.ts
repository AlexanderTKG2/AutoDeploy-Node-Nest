import { Controller, Get } from '@nestjs/common';
import config from 'src/config';
import { EmployeeService } from './employee.service';

@Controller(`${config.api.root}/employee`)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }
}
