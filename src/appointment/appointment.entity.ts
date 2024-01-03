import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CompanyUser } from '../companies/companies.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  appointmentDate: Date;

  @ManyToOne(() => CompanyUser, (companyUser) => companyUser.appointments)
  companyUser: CompanyUser;
}
