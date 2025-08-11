import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findOne(id: number) {
    const employee = await this.employeeRepository.findOneBy({
      id: id,
    });

    if (!employee) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return employee;
  }

  async update(id: number, updateItemDto: UpdateEmployeeData) {
    const dbEmployeeCount = await this.employeeRepository.countBy({
      id: id,
    });
    if (dbEmployeeCount === 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.employeeRepository.update({ id: id }, updateItemDto);
    return await this.employeeRepository.findOneBy({
      id: id,
    });
  }

  async delete(id: number) {
    const dbEmployeeCount = await this.employeeRepository.countBy({
      id: id,
    });
    if (dbEmployeeCount === 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    await this.employeeRepository.delete({
      id: id,
    });
  }
}
