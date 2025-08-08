import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  firstName: string;

  @Column({
    nullable: false,
  })
  lastName: string;

  @Column({
    nullable: false,
  })
  position: string;

  @Column({
    nullable: false,
  })
  salary: number;

  @Column({
    nullable: false,
  })
  workEmail: string;

  @Column({
    default: null,
    nullable: true,
  })
  personalEmail: string;

  @Column({
    default: null,
    nullable: false,
  })
  personalPhone: string;

  @Column({
    default: null,
    nullable: true,
  })
  country: string;

  @Column({
    default: true,
    nullable: false,
  })
  isActive: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  constructor(employee: Partial<Employee>) {
    Object.assign(this, employee);
  }
}
