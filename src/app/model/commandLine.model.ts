import {Book} from './book.model';
import {Customer} from './customer.model';
import {Orders} from './orders.model';

export class CommandLine {

  public clId: number;
  public book: Book;
  public customer: Customer;
  public orders: Orders;
  public clQuantity: number;
  public clStatus: boolean;
  public clDate: Date;
  
  constructor(clId: number, book: Book, customer: Customer, orders: Orders, clQuantity: number, clStatus: boolean, clDate: Date) {
    this.clId = clId;
    this.book = book;
    this.customer = customer;
    this.orders = orders;
    this.clQuantity = clQuantity;
    this.clStatus = clStatus;
    this.clDate = clDate;
  }


}
