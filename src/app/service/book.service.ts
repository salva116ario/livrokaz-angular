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
    return this.httpClient.get<Book[]>(
      "http://192.168.1.212:8080/book/getall"
    );
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

  public updateBook(book: Book) {
    this.httpClient
      .put<Book>("http://192.168.1.212:8080/book/modify", book)
      .subscribe(updatedBook => {
        this.availableBooks$.next(this.availableBooks);
      });
  }

  public filterBy(search: string, selectType: string): Observable<Book[]> {
    switch (selectType) {

      case 'author':
        return this.httpClient.get<Book[]>(`http://192.168.1.212:8080/book/getbyauthor/${search}`);
        break;
      case 'editor':
        return this.httpClient.get<Book[]>(`http://192.168.1.212:8080/book/getbyeditor/${search}`);
        break;
      case 'titre':
      console.log('error')
        return this.httpClient.get<Book[]>(`http://192.168.1.212:8080/book/getbytitle/${search}`);
        break;
  }
    }

  public publishBookBy(search: string, selectType: string) {
    console.log(search, selectType)
    this.filterBy(search, selectType).subscribe(
      bookList => {
        this.availableBooks = bookList;
        this.availableBooks$.next(this.availableBooks);
      });
  }
}
