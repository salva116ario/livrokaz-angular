import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Book} from '../model/book.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private availableBooks: Book[] = [];
  availableBooks$: BehaviorSubject<Book[]> = new BehaviorSubject(this.availableBooks);

  constructor(private httpClient: HttpClient) {
  }

  private getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:8080/book/getall');
  }

  public publishBooks() {
    this.getBooks().subscribe(
      bookList => {
        this.availableBooks = bookList;
        this.availableBooks$.next(this.availableBooks);
      });
  }


  public findBook(bookId: number): Observable<Book> {

    if (bookId) {
      if (this.availableBooks.length === 0) {
        console.log(bookId);
        return this.getBooks().pipe(map(books => books.find(book => book.boId === bookId)));
      }
      for (const book of this.availableBooks) {
        console.log(book);
      }
      return of(this.availableBooks.find(book => book.boId === bookId));
    } else {
      return of(new Book(null, null, '', '', '', '', '', 0, new Date(), 0, '', '', '', null));
    }
  }
}
