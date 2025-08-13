import { CreateEmployeeDTO } from './create-employee.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEmployeeDTO extends PartialType(CreateEmployeeDTO) {}
