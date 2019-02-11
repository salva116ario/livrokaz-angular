import {Book} from './book.model';
import {Customer} from './customer.model';
import { Orders } from './orders.model';

export class CommandLine {

  private clId: number;
  private book: Book;
  private customer: Customer;
  private orders: Orders;
  private clQuantity: number;
  private clStatus: boolean;
  private clDate: Date;
}
