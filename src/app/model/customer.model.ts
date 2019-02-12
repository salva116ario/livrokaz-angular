import {CommandLine} from './commandLine.model';
import {Role} from './role.model';
import {Orders} from './orders.model';

export class Customer {
  public cuId: number;
  public role: Role;
  public cuDeliveryAddress: string;
  public cuFirstName: string;
  public cuInvoiceAddress: string;
  public cuMail: string;
  public cuName: string;
  public cuPassword: string;
  public cuPhone: string;
  public orderses: Orders[];
  public commandLines: CommandLine[];
  
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

}


