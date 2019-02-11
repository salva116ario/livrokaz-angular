import {Customer} from './customer.model';
import {Employee} from './employee.model';

export class Role {
  private roId: number;
  private roLabel: string;
  private customers: Customer[];
  private employees: Employee[];


  constructor(roId: number, roLabel: string, customers: Customer[], employees: Employee[]) {
    this.roId = roId;
    this.roLabel = roLabel;
    this.customers = customers;
    this.employees = employees;
  }

  get _roId(): number {
    return this.roId;
  }

  set _roId(value: number) {
    this.roId = value;
  }

  get _roLabel(): string {
    return this.roLabel;
  }

  set _roLabel(value: string) {
    this.roLabel = value;
  }

  get _customers(): Customer[] {
    return this.customers;
  }

  set _customers(value: Customer[]) {
    this.customers = value;
  }

  get _employees(): Employee[] {
    return this.employees;
  }

  set _employees(value: Employee[]) {
    this.employees = value;
  }
}
