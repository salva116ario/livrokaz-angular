import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Book} from '../model/book.model';
import {catchError, map} from 'rxjs/operators';
import { Style } from '../model/style.model';

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
        return this.getBooks().pipe(map(books => books.find(book => book.boId === bookId)));
      }
      return of(this.availableBooks.find(book => book.boId === bookId));
    } else {
      return of(new Book(null, new Style(0, 'Undefined', 'Non défini', null), 'PAS D\'AUTEUR PUISQUE NOUVEAU LIVRE', 'https://www.avesta.fr/Content/Images/Products/45512e57-f5e0-4d30-a20f-8915d64d9b95.jpg', '', '', '', 0, new Date(), 0, '', '', '', null));
    }
  }

  public updateBook(book: Book) {
    this.httpClient.put<Book>('http://localhost:8080/book/modify', book).subscribe(updatedBook => {
      this.availableBooks$.next(this.availableBooks);
    }
    );
  }

   public createBook(book: Book) {
     this.httpClient.post<Book>('http://localhost:8080/book/add', book).subscribe(createdBook => {
         this.availableBooks.push(book);
         this.availableBooks$.next(this.availableBooks);
       }
     );
   }

  public deleteBook(bookId: number) {
   this.httpClient.delete('http://localhost:8080/book/delete/' + bookId).subscribe(deletedBook => {
     this.publishBooks();
   });
  }

  public findByAuthor(author: string): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>("http://localhost:8080/book/getbyauthor/{author}")
  }
  public findByEditor(title: string): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>("http://localhost:8080/book//getbyeditor/{editor}")
  }
  public findByTitle(author: string): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>("http://localhost:8080/book//getbytitle/{title}");
  }
}
