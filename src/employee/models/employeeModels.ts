export interface CreateEmployeeData {
  firstName: string;
  lastName: string;
  position: string;
  salary: number;
  workEmail: string;
  personalEmail: string;
  personalPhone: string;
  country: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UpdateEmployeeData = Partial<CreateEmployeeData>;
