import {CommandLine} from './commandLine.model';
import {Customer} from './customer.model';

export class Orders {
  private orID: number;
  private customer: Customer;
  private orCompleted: boolean;
  private orDate: Date;
  private orShippingCosts: number;
  private orTotalCost: number;
  private commandLines: CommandLine[];


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

  get _orID(): number {
    return this.orID;
  }

  set _orID(value: number) {
    this.orID = value;
  }

  get _customer(): Customer {
    return this.customer;
  }

  set _customer(value: Customer) {
    this.customer = value;
  }

  get _orCompleted(): boolean {
    return this.orCompleted;
  }

  set _orCompleted(value: boolean) {
    this.orCompleted = value;
  }

  get _orDate(): Date {
    return this.orDate;
  }

  set _orDate(value: Date) {
    this.orDate = value;
  }

  get _orShippingCosts(): number {
    return this.orShippingCosts;
  }

  set _orShippingCosts(value: number) {
    this.orShippingCosts = value;
  }

  get _orTotalCost(): number {
    return this.orTotalCost;
  }

  set _orTotalCost(value: number) {
    this.orTotalCost = value;
  }

  get _commandLines(): CommandLine[] {
    return this.commandLines;
  }

  set _commandLines(value: CommandLine[]) {
    this.commandLines = value;
  }
}
