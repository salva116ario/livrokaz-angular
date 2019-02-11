import {CommandLine} from './commandLine.model';
import {Role} from './role.model';
import {Orders} from './orders.model';

export class Customer {
  private cuId: number;
  private role: Role;
  private cuDeliveryAddress: string;
  private cuFirstName: string;
  private cuInvoiceAddress: string;
  private cuMail: string;
  private cuName: string;
  private cuPassword: string;
  private cuPhone: string;
  private orderses: Orders[];
  private commandLines: CommandLine[];
  
  constructor(cuId: number, role: Role, cuDeliveryAddress: string, cuFirstName: string, cuInvoiceAddress: string, cuMail: string, cuName: string, cuPassword: string, cuPhone: string, orderses: Orders[], commandLines: CommandLine[]) {
    this.cuId = cuId;
    this.role = role;
    this.cuDeliveryAddress = cuDeliveryAddress;
    this.cuFirstName = cuFirstName;
    this.cuInvoiceAddress = cuInvoiceAddress;
    this.cuMail = cuMail;
    this.cuName = cuName;
    this.cuPassword = cuPassword;
    this.cuPhone = cuPhone;
    this.orderses = orderses;
    this.commandLines = commandLines;
  }
  
  get _cuId(): number {
    return this.cuId;
  }

  set _cuId(value: number) {
    this.cuId = value;
  }

  get _role(): Role {
    return this.role;
  }

  set _role(value: Role) {
    this.role = value;
  }

  get _cuDeliveryAddress(): string {
    return this.cuDeliveryAddress;
  }

  set _cuDeliveryAddress(value: string) {
    this.cuDeliveryAddress = value;
  }

  get _cuFirstName(): string {
    return this.cuFirstName;
  }

  set _cuFirstName(value: string) {
    this.cuFirstName = value;
  }

  get _cuInvoiceAddress(): string {
    return this.cuInvoiceAddress;
  }

  set _cuInvoiceAddress(value: string) {
    this.cuInvoiceAddress = value;
  }

  get _cuMail(): string {
    return this.cuMail;
  }

  set _cuMail(value: string) {
    this.cuMail = value;
  }

  get _cuName(): string {
    return this.cuName;
  }

  set _cuName(value: string) {
    this.cuName = value;
  }

  get _cuPassword(): string {
    return this.cuPassword;
  }

  set _cuPassword(value: string) {
    this.cuPassword = value;
  }

  get _cuPhone(): string {
    return this.cuPhone;
  }

  set _cuPhone(value: string) {
    this.cuPhone = value;
  }

  get _orderses(): Orders[] {
    return this.orderses;
  }

  set _orderses(value: Orders[]) {
    this.orderses = value;
  }

  get _commandLines(): CommandLine[] {
    return this.commandLines;
  }

  set _commandLines(value: CommandLine[]) {
    this.commandLines = value;
  }
}


