import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class CreateEmployeeDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsEmail()
  @IsNotEmpty()
  workEmail: string;

  @IsEmail()
  personalEmail: string;

  @IsString()
  @IsNotEmpty()
  personalPhone: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
