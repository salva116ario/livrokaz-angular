import {CommandLine} from './commandLine.model';
import { Role } from './role.model';
import { Orders } from './orders.model';

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
}
