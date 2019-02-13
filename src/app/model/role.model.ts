import {Customer} from './customer.model';
import {Employee} from './employee.model';

export class Role {
  public roId: number;
  public roLabel: string;
  public customers: Customer[];
  public employees: Employee[];


  constructor(roId: number, roLabel: string, customers: Customer[], employees: Employee[]) {
    this.roId = roId;
    this.roLabel = roLabel;
    this.customers = customers;
    this.employees = employees;
  }


}
