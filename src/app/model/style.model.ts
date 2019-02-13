import {Book} from './book.model';

export class Style {
  public stId: number;
  public stLabelEn: string;
  public stLabelFr: string;
  public books: Book[];


  constructor(stId: number, stLabelEn: string, stLabelFr: string, books: Book[]) {
    this.stId = stId;
    this.stLabelEn = stLabelEn;
    this.stLabelFr = stLabelFr;
    this.books = books;
  }


}

