import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { UpdateEmployeeDTO } from './dto/update-employee.dto';
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

  async create(createEmployeeDto: CreateEmployeeDTO) {
    if (!createEmployeeDto || Object.keys(createEmployeeDto).length === 0) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
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
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not Found',
          message: `Could not find employee with id ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDTO) {
    const dbEmployeeCount = await this.employeeRepository.countBy({
      id: id,
    });
    if (dbEmployeeCount === 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not Found',
          message: `Could not find employee with id ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    if (!updateEmployeeDto || Object.keys(updateEmployeeDto).length === 0) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    updateEmployeeDto.updatedAt = new Date();
    await this.employeeRepository.update({ id: id }, updateEmployeeDto);
    return await this.employeeRepository.findOneBy({
      id: id,
    });
  }

  async delete(id: number) {
    const dbEmployeeCount = await this.employeeRepository.countBy({
      id: id,
    });
    if (dbEmployeeCount === 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Not Found',
          message: `Could not find employee with id ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.employeeRepository.delete({
      id: id,
    });
  }
}
