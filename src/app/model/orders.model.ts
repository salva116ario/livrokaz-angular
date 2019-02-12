import {CommandLine} from './commandLine.model';
import {Customer} from './customer.model';

export class Orders {
  public orID: number;
  public customer: Customer;
  public orCompleted: boolean;
  public orDate: Date;
  public orShippingCosts: number;
  public orTotalCost: number;
  public commandLines: CommandLine[];

  constructor(
    orID: number,
    customer: Customer,
    orCompleted: boolean,
    orDate: Date,
    orShippingCosts: number,
    orTotalCost: number,
    commandLines: CommandLine[]) {
    this.orID = orID;
    this.customer = customer;
    this.orCompleted = orCompleted;
    this.orDate = orDate;
    this.orShippingCosts = orShippingCosts;
    this.orTotalCost = orTotalCost;
    this.commandLines = commandLines;
  }


}
