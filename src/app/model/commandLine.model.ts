import {Book} from './book.model';
import {Customer} from './customer.model';
import {Orders} from './orders.model';

export class CommandLine {

  private clId: number;
  private book: Book;
  private customer: Customer;
  private orders: Orders;
  private clQuantity: number;
  private clStatus: boolean;
  private clDate: Date;
  
  constructor(clId: number, book: Book, customer: Customer, orders: Orders, clQuantity: number, clStatus: boolean, clDate: Date) {
    this.clId = clId;
    this.book = book;
    this.customer = customer;
    this.orders = orders;
    this.clQuantity = clQuantity;
    this.clStatus = clStatus;
    this.clDate = clDate;
  }


  get _clId(): number {
    return this.clId;
  }

  set _clId(value: number) {
    this.clId = value;
  }

  get _book(): Book {
    return this.book;
  }

  set _book(value: Book) {
    this.book = value;
  }

  get _customer(): Customer {
    return this.customer;
  }

  set _customer(value: Customer) {
    this.customer = value;
  }

  get _orders(): Orders {
    return this.orders;
  }

  set _orders(value: Orders) {
    this.orders = value;
  }

  get _clQuantity(): number {
    return this.clQuantity;
  }

  set _clQuantity(value: number) {
    this.clQuantity = value;
  }

  get _clStatus(): boolean {
    return this.clStatus;
  }

  set _clStatus(value: boolean) {
    this.clStatus = value;
  }

  get _clDate(): Date {
    return this.clDate;
  }

  set _clDate(value: Date) {
    this.clDate = value;
  }
}
