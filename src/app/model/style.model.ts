import {Book} from './book.model';

export class Style {
  private stId: number;
  private stLabelEn: string;
  private stLabelFr: string;
  private books: Book[];


  constructor(stId: number, stLabelEn: string, stLabelFr: string, books: Book[]) {
    this.stId = stId;
    this.stLabelEn = stLabelEn;
    this.stLabelFr = stLabelFr;
    this.books = books;
  }

  get _stId(): number {
    return this.stId;
  }

  set _stId(value: number) {
    this.stId = value;
  }

  get _stLabelEn(): string {
    return this.stLabelEn;
  }

  set _stLabelEn(value: string) {
    this.stLabelEn = value;
  }

  get _stLabelFr(): string {
    return this.stLabelFr;
  }

  set _stLabelFr(value: string) {
    this.stLabelFr = value;
  }

  get _books(): Book[] {
    return this.books;
  }

  set _books(value: Book[]) {
    this.books = value;
  }
}

