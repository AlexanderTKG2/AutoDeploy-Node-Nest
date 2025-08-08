import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateEmployeeData,
  UpdateEmployeeData,
} from './models/employeeModels';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll() {
    const employees = await this.employeeRepository.find();
    return employees;
  }

  async create(createEmployeeDto: CreateEmployeeData) {
    createEmployeeDto.createdAt = new Date();
    createEmployeeDto.updatedAt = new Date();
    const employee = new Employee(createEmployeeDto);
    const newEmployee = await this.entityManager.save(employee);
    return newEmployee;
  }

  findOne(id: number) {
    console.log(id);
    throw new Error('Unimplemented');
  }

  update(id: number, updateItemDto: UpdateEmployeeData) {
    console.log({ id, updateItemDto });
    throw new Error('Unimplemented');
  }

  delete(id: number) {
    console.log(id);
    throw new Error('Unimplemented');
  }
}
