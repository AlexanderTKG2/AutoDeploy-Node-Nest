import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private readonly mockEmployees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      position: 'Worker',
      salary: 10000,
      workEmail: 'email@example.com',
      personalEmail: 'email@example.com',
      personalPhone: '9999000000',
      country: 'Mexico',
    },
    {
      id: 2,
      firstName: 'Joe',
      lastName: 'Swanson',
      position: 'Policeman',
      salary: 10,
      workEmail: 'email1@example.com',
      personalEmail: 'email1@example.com',
      personalPhone: '9991000000',
      country: 'Canada',
    },
  ];

  findAll() {
    return this.mockEmployees;
  }
}
