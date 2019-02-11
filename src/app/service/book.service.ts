import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable } from 'rxjs';
import {Book} from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private availableBooks: Book[];
  availableBooks$: BehaviorSubject<Book[]> = new BehaviorSubject(this.availableBooks);

  constructor(private httpClient: HttpClient) {
  }

  private getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:8080/book/getall');
  }

  public publishBooks() {
    this.getBooks.subscribe(
      bookList => {
        this.availableBooks = bookList;
        this.availableBooks$.next(this.availableBooks);
      });
  }
}
