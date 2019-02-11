import { Customer } from './customer.model';

import { Employee } from './employee.model';

export class Role {
  private roId: number;
  private roLabel: string;
  private customers: Customer[];
  private employees: Employee[];
}
